import React from 'react'
import { useState } from 'react'
import User from './Context'
import { useContext } from 'react'

const ContextSample = () => {
  const {name,setName}=useContext(User)
    
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default ContextSample
