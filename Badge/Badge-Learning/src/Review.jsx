import React, { useEffect, useState } from 'react'

const Review = () => {
  
    let arr=["Rono","Messi","Ney","Marcelo","Backam","Mbape","Felix"]
    let [inp,setInp]=useState("")
    let [debounce,setDebounce]=useState("")
    let [isDebounce,setIsDebounce]=useState(false)
    let searched=arr.filter((val)=>{
        let searchVal=debounce.toLocaleLowerCase()
        let match=val.toLowerCase().includes(searchVal)
        
        return(
            match
        )
    })
      useEffect(()=>{
       setIsDebounce(true)
        const timer=setTimeout(() => {
          const de=inp
            setDebounce(inp)
            setIsDebounce(false)
        }, 3000);   
   return ()=>{
    clearTimeout(timer)
   }
    },[inp])
   

  return (
    <div>
        <input value={inp} onChange={(e)=>setInp(e.target.value)} type="text" name="" id="" />
        {isDebounce && <p>Loading.....</p>}
      {
        searched.map((val)=>{
            
            return(<h1>{val}</h1>)
        })
      }
    </div>
  )
}

export default Review
