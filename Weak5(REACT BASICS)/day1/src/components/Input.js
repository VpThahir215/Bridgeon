import React from 'react'
import { useEffect,useRef } from 'react'

function Input() {
    let inpRef=useRef();
     let clickRef=useRef(0)
   useEffect(()=>{
 inpRef.current.focus();
   },[])
   function click(){
   
     clickRef.current++
     console.log(clickRef.current);
     
   }

    
    
  return (
    <div>
        <input ref={inpRef} />
      <button onClick={click}>NOOoo</button>
      
    </div>
  )
}

export default Input
