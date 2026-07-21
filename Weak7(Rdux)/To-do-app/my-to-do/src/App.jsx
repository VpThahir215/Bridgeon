import { useState } from 'react'
import Note from './Note'
import './App.css'
import Note2 from './Note2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Note/>
   <Note2/>
    </>
  )
}

export default App
