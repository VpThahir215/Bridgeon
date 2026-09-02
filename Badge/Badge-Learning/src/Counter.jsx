import React from 'react'
import { incriment,decriment,reset } from './counterSlice'
import { useDispatch,useSelector } from 'react-redux'
const Counter = () => {
    const dispatch=useDispatch()
    const storeCount=useSelector((state)=>state.counter.counter)
    console.log(storeCount);
    

  return (
    <div>
      <h1>{storeCount}</h1>
      <button onClick={()=>dispatch(incriment(2))}>Incriment</button>
       <button onClick={()=>dispatch(decriment())}>Decriment</button>
       <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
