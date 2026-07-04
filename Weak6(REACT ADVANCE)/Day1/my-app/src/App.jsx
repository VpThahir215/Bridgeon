import { useState } from 'react'
import './App.css'
import Axios from './component/Axios'
import { UserContext } from './userContext'
import ProfileUseContext from './component/ProfileUseContext'
import UseReducer from './component/UseReducer'
import CustomHook from './component/CustomHook'
import CustomHook2 from './component/CustomHook2'

function App() {
  const [count, setCount] = useState(0)
  const [user]=useState("Thahir")
  return (
    <>
   <Axios/>
   <UserContext.Provider value={user}>
   <h1>App Component</h1>

   <ProfileUseContext/>
    <UseReducer/>
    <CustomHook/>
    <CustomHook2/>
   </UserContext.Provider>
  
    </>
  )
}

export default App
