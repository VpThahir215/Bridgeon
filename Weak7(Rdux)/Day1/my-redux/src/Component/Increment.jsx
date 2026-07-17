import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Increment() {
  const value=useSelector((state)=>{
    return state.value
  })
  const dispatch=useDispatch()
  

  
  return (
    <div>
<button 
className='bg-yellow-500 text-white p-4 rounded'
onClick={(()=>{
  dispatch({
    type:"increment"
  })
})}
>Increment</button>
<label htmlFor="" id='label'>{value}</label>
<button
className='bg-yellow-500 text-white p-4 rounded'
onClick={(()=>{
  dispatch({
    type:"decrement"
  })
})}
>Decrement</button>
    </div>
  )
}

export default Increment
