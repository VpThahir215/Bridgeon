import { useState } from 'react'

import './App.css'
import Memo from './Memo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Memo/>
    </>
  )
}

export default App
