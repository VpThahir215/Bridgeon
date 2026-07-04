import React from 'react'
import { useReducer } from 'react'
import reducer from "../reducer"
import { UserContext } from '../userContext';
import { useContext } from 'react';

function  UseReducer() {
    const [count,dispatch]=useReducer(reducer,0);
    const user=useContext(UserContext)

  return (
    <div>
      <button onClick={()=> dispatch({type:"Increment"})}>+</button>
        <button onClick={()=> dispatch({type:"Decrement"})}>-</button>
        <h1>{count}</h1>
        <h1> sample Use context {user}</h1>
    </div>
  )
}

export default  UseReducer
