import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Figma from './component/Figma'
import Login from './component/Login'
import Counter from './component/Counter'
import ToDoRedux from './component/ToDoRedux'
import TodoTanstack from './component/TodoTanstack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Figma/>
    <Login/>
    <Counter/>
    <ToDoRedux/>
    <TodoTanstack/>
    </>
  )
}

export default App
