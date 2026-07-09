import { useState } from 'react'
import Add from './context/Add'
import Div from './context/Div'
import {AppContext} from './AppContext.jsx'
import './App.css'
import UseReducer from './Rducer/UseReducer.jsx'
import Hook from './CustomHook/Hook.jsx'
import One from './Routing/One.jsx'
import Three from './Routing/Three.jsx'
import Tow from './Routing/Tow.jsx'
import {Routes,Route,useNavigate,Link} from 'react-router-dom'
import Note from './Note-App/Note.jsx'


function App() {
  const [count] = useState(100)
  const [nam,setNam] = useState(0)
  const navigate=useNavigate()

  return (
    <>
    <AppContext.Provider value={{count,nam,setNam}}>
     <Div/>
     <UseReducer/>
     <Hook/>
     <Add/>
    </AppContext.Provider>
   <Routes>
     
    <Route path='/one/:id' element={<One/>}/>
      <Route path='/tow/:id' element={<Tow/>}/>
        <Route path='/three/:id' element={<Three/>}/>
   </Routes>
   <Note/>


    </>
  )
}

export default App
