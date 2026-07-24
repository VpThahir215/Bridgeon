import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Figma from './component/Figma'
import Login from './component/Login'
import Counter from './component/Counter'
import ToDoRedux from './component/ToDoRedux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Figma/>
    <Login/>
    <Counter/>
    <ToDoRedux/>
    </>
  )
}

export default App
