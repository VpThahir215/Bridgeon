import React from 'react'
import store from '../test'
import { useDispatch,useSelector } from 'react-redux'


function Decrement() {
    const value=useSelector((store)=>{
        return store.value
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
      >INCRIMENT</button>
      <button
      className='bg-yellow-500 text-white p-4 rounded'
       onClick={(()=>{
        dispatch({
            type:"decrement"
        })
       })}
      >DECRIMENT</button>
    </div>
  )
}

export default Decrement
