import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { doLogin } from '../login'
import { doLogout } from '../login'
import { store } from '../store'

function Login() {
    const useLogin=useSelector((state)=>{ return state.login.login})

const dispatch=useDispatch();

  return (
    <div>
     {useLogin?  <h1>Welconme..</h1>:<h1>Please login....</h1>} 
      <button
      onClick={()=>dispatch(doLogin())}
      >Login</button>
      {useLogin? <button
      onClick={()=>dispatch(doLogout())}
      >Logout</button>:null}
     

    </div>
  )
}

export default Login
