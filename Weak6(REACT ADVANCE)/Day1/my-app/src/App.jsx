import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Axios from './component/Axios'
import { UserContext } from './userContext'
import ProfileUseContext from './component/ProfileUseContext'
import UseReducer from './component/UseReducer'
import CustomHook from './component/CustomHook'
import CustomHook2 from './component/CustomHook2'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Product from './component/pages/Product'
import Layout from './component/nestedRout/Layout'
import About2 from './component/nestedRout/About2'
import Contact2 from './component/nestedRout/Contact2'
import Home2 from './component/nestedRout/Home2'


function App() {
  const [count, setCount] = useState(0)
  const [user] = useState("Thahir")
  const [showBotton, setShowBotton] = useState("")
  const navigate = useNavigate()
  // let  component
  // if(showBotton==="About"){
  //   component=<About></About>
  // }else if(showBotton==="Contact"){
  //   component=<Contact></Contact>
  // }else if(showBotton==="Home"){
  //   component=<Home></Home>
  // }


  return (
    <>
      <Axios />
      <UserContext.Provider value={user}>
        <h1>App Component</h1>

        <ProfileUseContext />
        <UseReducer />
        <CustomHook />
        <CustomHook2 />
      </UserContext.Provider>
      <h1>Hello React</h1>
      {/* <BrowserRouter>
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
    
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/product/:id' element={<Products/>}/>

    </Routes>

    
    </BrowserRouter> */}

      {/* 
    <button onClick={()=>setShowBotton("About")}>About</button>
    <button onClick={()=>setShowBotton("Contact")}>Contact</button>
    <button onClick={()=>setShowBotton("Home")}>Home</button> */}
      {/* {component} */}
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/contact')}>Contact</button>
      <button onClick={() => navigate('/home')}>Home</button>
      <button onClick={() => navigate('/product/3')}>Himalayan 450</button>
      <button onClick={() => navigate('/product/4')}>Himalayan 411</button>

      <Routes>

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product/:id' element={<Product/>}/>
    
        {/* <Route path="/" element={<Layout/>}/>
        <Route index element={<Home2/>}/>
        <Route path='about2' element={<About2/>}/>
        <Route path='contact2' element={<Contact2/>}/> */}

      </Routes>

      <Routes>

  
  
</Routes>



    </>
  )
}

export default App
