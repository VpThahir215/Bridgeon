import React from 'react'
import { useState } from 'react'

const ToogleBtn = () => {
      let [btn,setBtn]=useState(false)
    console.log(btn)
  return (
    <div>
        {btn &&  <h1>Hi! Thahir</h1>}       
          <button onClick={()=>setBtn(!btn)}>{btn ?"Hide" : "Show"}</button>
      
    </div>
  )
}

export default ToogleBtn
