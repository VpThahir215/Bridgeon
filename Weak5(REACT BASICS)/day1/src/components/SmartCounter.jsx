import React from 'react'
import { useState,useEffect,useRef } from 'react'

function SmartCounter() {
const [text,setText]=useState("")
const [plus,setPlus]=useState(null);
const [sub,setSub]=useState(null)
const firstRender=useRef(true)

useEffect(()=>{
  if (firstRender.current) {
    firstRender.current = false;
    return;
  }

  alert("Value Updated")
},[plus,sub])


function Reset(){
setPlus("")
  setSub("")

}



  return (
    <div>
      <input type="text" onChange={(s)=>setText(s.target.value)} />
      <button onClick={()=>setPlus(plus+1)}>+</button>
      <h1>{plus}</h1>
      <button onClick={()=>setSub(plus-1)}>-</button>
      <button onClick={Reset}>Reset</button>
      <h1>{sub}</h1>
      <h1>{text}</h1>
    </div>
  )
}

export default SmartCounter
