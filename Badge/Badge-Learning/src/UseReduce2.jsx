import React from 'react'
import { useEffect,useReducer } from 'react'
import reduce from './reduce'

const UseReduce2 = () => {
        const [count,dispatch]=useReducer(reduce,0)    
  return (
    <div>
          <h1>{count}</h1>
     <button onClick={()=>dispatch({type:"incriment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decriment"})}>Decrement</button>
      
    
    </div>
  )
}

export default UseReduce2
