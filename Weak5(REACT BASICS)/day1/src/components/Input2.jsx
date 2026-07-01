import React, { useRef } from 'react'
import { useState,useEffect } from 'react'

function Input2() {
    const [text,setText]=useState("")
    const inpRef=useRef()
  
  
   let arr=text.trim()===""?0:text.trim().split(" ")
       let c=arr.length
       console.log(c);
       

       useEffect(()=>{
         inpRef.current.focus()
       },[])
       function inputFocus(){
           inpRef.current.focus()
       }
     
    

  return (
    <div>
      <input ref={inpRef} type="text" onChange={(e)=>setText(e.target.value)} />
      <h1>Word {c}</h1>
      <button onClick={inputFocus}>focus to input</button>
    </div>
  )
}

export default Input2
