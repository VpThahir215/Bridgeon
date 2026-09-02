import React from 'react'
import { useState } from 'react'

const SignUp = () => {
     let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [confirm,setConfirm]=useState("")

function btnHandle(){
if(name===""){
    alert("Please Enter Your Name")
    return
}
    if(email===""){
    alert("Please Enter Your Email")
        return
}
    if(password===""){
    alert("Please Enter Your Password")
        return
}
    if(confirm===""){
    alert("Please Confirm Password")
        return
}
    if(password===confirm){
      
     let User ={
        Name:name,
            Email:email,
            Password:password
        }
        localStorage.setItem("user",JSON.stringify(User))
          alert("Welcome To MotoMini")
    }else{
        alert("Note Match Your Confirm Password")
    }
    
}

  return (
    <div>
           <input  onChange={(e)=>setName(e.target.value)} placeHolder="Name"></input><br></br>
        
           <input  onChange={(e)=>setEmail(e.target.value)} placeHolder="Email"></input><br></br>
           <input  type="password" onChange={(e)=>setPassword(e.target.value)} placeHolder="Password"></input><br></br>
           <input   type="password" onChange={(e)=>setConfirm(e.target.value)} placeHolder="Confirm Password"></input><br></br>
        <button onClick={btnHandle}>Login</button>
      
    </div>
  )
}

export default SignUp
