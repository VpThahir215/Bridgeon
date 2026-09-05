import React from 'react'
import { useState,useEffect} from 'react'
const StopWatch = () => {
      const [time,setTime]=useState(0)
    const [running,setRunning]=useState(false)
      const[minute,setMinute]=useState(0)
        const [hour,setHour]=useState(0)
 
    useEffect(()=>{
        if(!running) return
     const timer= setInterval(()=>{
       setTime((prev)=> prev + 1)
        
     },1000)
         return ()=>{
             clearInterval(timer)
         }
    },[running])
    useEffect(()=>{
      
        if(time===60){
           setMinute(minute+1)
            setTime(0)
        }
        if(minute===60){
           setHour(hour+1)
        }
    },[time,minute])

  return (
    <div>
         <div style={{display:"flex"}}>
             <h1 >Second:{time}</h1>
          <h1 style={{marginLeft:"50px"}}>Minute:{minute}</h1>
          <h1 style={{marginLeft:"50px"}}>Hour:{hour}</h1>

         </div>
         <button onClick={()=>setRunning(true)} >Start</button>
         <button onClick={()=>setRunning(false)}  >Stop</button>
         <button onClick={()=>{
          setRunning(false)
          setTime(0)
          setMinute(0)
          }}>Reset</button>
          
          
      
    </div>
  )
}

export default StopWatch
