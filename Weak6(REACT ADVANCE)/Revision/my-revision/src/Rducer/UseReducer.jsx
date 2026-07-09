import React from 'react'
import { useReducer } from 'react'
import Reducer from './Reducer'

function UseReducer() {
const [count,dispatch]=useReducer(Reducer,0)
  return (
    <div>
        <button onClick={()=>dispatch("Increment")}>+</button>
        <button onClick={()=>dispatch("Decrement")}>-</button>
        <h1>{count}</h1>
    </div>
  )
}

export default UseReducer
