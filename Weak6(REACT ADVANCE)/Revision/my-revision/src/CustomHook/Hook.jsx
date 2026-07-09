import React from 'react'
import useCounter from './customHook'


function Hook(state) {
    let {count,addd}=useCounter()
  return (
    <div>
      <button onClick={addd}>Custom Hook</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Hook
