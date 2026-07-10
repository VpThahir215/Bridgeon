import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import contaxt from './contaxt'
import { Routes,Route,Link,NavLink, useNavigate } from 'react-router-dom'


function App() {
   let [Cname,CsetName]=useState("")
        let [Cemail,CsetEmail]=useState("")
        const navigate=useNavigate()

  return (
    <>

<button onClick={()=>navigate('/home')}>home</button>
    <contaxt.Provider value={{Cname,CsetName,Cemail,CsetEmail}}>
     
     

     <Routes>
      <Route path='/home' element={<Home/>} ></Route>
       <Route path='/' element={<Login/>}></Route>
     </Routes>
     </contaxt.Provider>
    </>
  )
}

export default App
