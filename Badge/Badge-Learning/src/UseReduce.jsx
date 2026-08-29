import React from 'react'
import { useReducer } from 'react'
import reduce from './reduce'


const UseReduce = () => {
    const[count,dispatch]=useReducer(reduce,0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch({type:"incriment"})}>Incriment</button>
        <button onClick={()=>dispatch({type:"decriment"})}>Decriment</button>
      
    </div>
  )
}

export default UseReduce
