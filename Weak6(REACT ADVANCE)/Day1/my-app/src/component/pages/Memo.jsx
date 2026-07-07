import React, { useState } from 'react'
import ChildeMemo from './ChildeMemo'

function Memo() {
    const [count,setCount]=useState(null)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Memmo</button>
      <p>Count{count}</p>
      <ChildeMemo name="Ronaldo"/>
    </div>
  )
}

export default Memo
