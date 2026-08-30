import { useState } from 'react'
import{Routes,Route,useNavigate} from 'react-router-dom'
import { lazy,Suspense } from 'react'
import './App.css'
import UseReduce from './UseReduce'
import UseRef from './UseRef'
import Pagination from './Pagination'
import  User  from './Context'
import Context from './Context'
import ContextSample from './ContextSample'
import Tanstack from './Tanstack'
import Counter from './Counter'
const Memo=lazy(()=>import('./Memo'))


function App() {
  const [count, setCount] = useState(0)
  const navigate=useNavigate()
  const [name,setName]=useState("Thahir")

  return (
    <>
    <User.Provider value={{name,setName}}>
      <Counter/>
      <Tanstack/>
      <ContextSample/>
    <UseReduce/>
    <UseRef/>
    </User.Provider>
    <Pagination/>
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
