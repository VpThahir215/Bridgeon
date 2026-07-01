import React from 'react'
import { useState } from 'react'

function Count4() {
const [count,setCount]=useState(0);


  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Show Count</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Count4
