import { useState } from 'react'
import{Routes,Route,useNavigate} from 'react-router-dom'
import { lazy,Suspense } from 'react'
import './App.css'
const Memo=lazy(()=>import('./Memo'))

function App() {
  const [count, setCount] = useState(0)
  const navigate=useNavigate()

  return (
    <>
    <h1>Main</h1>
    <button onClick={()=>navigate('/memo')}>Go To Memo</button>
<Suspense fallback={<h1>Loading....</h1>}>
     <Routes>
         <Route path="/memo" element={ <Memo/>} />

     </Routes>
     </Suspense>
    </>
  )
}

export default App
