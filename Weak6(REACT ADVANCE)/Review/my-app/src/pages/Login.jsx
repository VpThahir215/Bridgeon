import React, { useContext, useState } from 'react'
import contaxt from '../contaxt'


function Login() {
    let {Cname,CsetName}=useContext(contaxt)
      let {Cemail,CsetEmail}=useContext(contaxt)
      
  return (
    <div>
        <input 
        onChange={(e)=>CsetName(e.target.value)}
         type="text" placeholder='Name'/>
      
        <input 
          onChange={(e)=>CsetEmail(e.target.value)}
        type="text" placeholder='Email'/>
         
      <h1></h1>
    </div>
  )
}

export default Login
