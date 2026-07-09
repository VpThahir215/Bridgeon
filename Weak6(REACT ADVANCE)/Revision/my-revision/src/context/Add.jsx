import React, { useState } from 'react'
import { AppContext } from '../AppContext'
import { useContext } from 'react'

function Add() {
   
    const value=useContext(AppContext)
      const {count,nam,setNam} = useContext(AppContext)
    const [tow,setTow]=useState(200)
  setNam(500)
  return (

    <div>
      
      <h1>Add {count}</h1>
  
      <h1>add {tow}</h1>
            
     
    </div>
  )
}

export default Add
