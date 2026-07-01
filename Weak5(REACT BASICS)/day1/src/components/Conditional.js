import React from 'react'
import { useState } from 'react'

function Conditional() {
    const [show,useShow]=useState(false)
  return (
   
  
    <div>
       <button onClick={()=>useShow(!show)}>Click</button>
       {show ? <h1>Hello </h1>:<h1>Hide</h1>}
    </div>
  )
}

export default Conditional
