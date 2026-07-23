import { useState } from 'react'
import './App.css'
import Counter from './component/Counter'
import TodDo from './component/TodDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter/>
    <TodDo/>
    </>
  )
}

export default App
