import React from 'react'
import useCount from '../useCount'

function CustomHook2() {
    const {count,add}=useCount()
  return (
    <div>
      <button onClick={add}>Custom Hook 2</button>
      <h1>{count}</h1>
    </div>
  )
}

export default CustomHook2
