import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment } from '../counter'
import { decrement } from '../counter'

function Counter() {
    const storeCount=useSelector((state)=>state.counter.counter)
    const dispatch=useDispatch()
    
  return (
    <div>
      <h1>Counter</h1>
      <h1 style={{paddingLeft:"55px"}}>{storeCount}</h1>
      <button 
      onClick={()=>dispatch(increment())}
      style={{backgroundColor:"red"}}>Increment</button>
      <button
      onClick={()=>dispatch(decrement())}
      style={{backgroundColor:"green"}}>Decrement</button>
    </div>
  )
}

export default Counter
