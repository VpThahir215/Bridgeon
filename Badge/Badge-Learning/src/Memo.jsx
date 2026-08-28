import React from 'react'
import { useMemo,useState } from 'react'
import ReactMemo from './ReactMemo'
const Memo = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")

    const memo=useMemo(()=>{
        console.log("calculatingg.....");
        
        return count*2
    },[count])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setName("Thahir")}>Change name</button>
        <h1>Count : {memo}</h1>
        <h1>Name :{name}</h1>

        <ReactMemo name="Thahir"/>
      
    </div>
  )
}

export default Memo
