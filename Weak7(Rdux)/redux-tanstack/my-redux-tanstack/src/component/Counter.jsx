import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment } from '../cart'
import { decrement } from '../cart'


function Counter() {
    const doCount=useSelector((state)=>{
    
        return state.counter.count
    })
    const dispatch=useDispatch();
  return (
    <div>
        <button 
        onClick={()=>dispatch(increment())}
        >+</button>
        <button
        onClick={()=>dispatch(decrement())}
        >-</button>
        <h1>{doCount}</h1>
      
    </div>
  )
}

export default Counter
