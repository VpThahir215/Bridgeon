import React from 'react'
import useCount from '../useCount'

function CustomHook() {
    const {count,add}=useCount()
  return (
    <div>
        <button onClick={add}>Custom Hook</button>
        <h1>{count}</h1>
      
    </div>
  )
}

export default CustomHook
