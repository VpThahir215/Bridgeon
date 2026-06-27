import React, { useEffect } from 'react'
import { useState } from 'react'

function Count3() {

const [count,setCount]=useState(0);
const [dark,setDark]= useState(false);

const [count2,setCount2]=useState(0);

useEffect(()=>{
  console.log("Starting....");
  console.log("Changing Count1..."+count);
    console.log("Changing Count2..."+count2);
  return()=>{
    console.log("Unmounting "+count);
     console.log("Unmounting2 "+count2);
    
  }
  
  
},[count,count2])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Click</button>
      <h1>Count : {count}</h1>
       <button onClick={()=>setCount2(count2+1)}>One more</button>
      <h1>Count : {count2}</h1>
      <button onClick={()=>setDark(!dark)}>Change Theame</button>
      <h1 style={{
       color: dark? "yellow":"blue"
      }}
      >Hellow React</h1>
    </div>
  )
}

export default Count3
