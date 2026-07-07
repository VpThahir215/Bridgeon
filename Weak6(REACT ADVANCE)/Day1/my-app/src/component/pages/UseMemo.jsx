import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count,setCount]=useState(null);
    const [num,setNum]=useState(5);
  let add=useMemo(()=>{
    console.log("Add function....");
    return num+num
    
  },[num])
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count : {count}</button>
         <button onClick={()=>setNum(num+1)}>Number : {num}</button>
      <h1>{add}</h1>
    </div>
   
  )
}

export default UseMemo
