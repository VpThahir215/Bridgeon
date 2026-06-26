import React from 'react'
import { useState,useEffect } from 'react'

function Count2(props) {
     const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Mounting.....");
        console.log("Updating....."+count);
        return ()=>{
          console.log("Clean Up"+count);
          
        }
        
        
    },[count])
   
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increace</button>
        <h1>Count:{count}</h1>
      
    </div>
  )
}

export default Count2
