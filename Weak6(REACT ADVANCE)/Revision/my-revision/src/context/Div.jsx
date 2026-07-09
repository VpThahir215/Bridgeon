import React, { useContext } from 'react'
import { AppContext } from '../AppContext.jsx'
import { useState } from 'react'

function Div() {
    const {nam,setNam}=useContext(AppContext)
  return (
    <div>
      <h2>Div {nam}</h2>
    </div>
  )
}

export default Div
