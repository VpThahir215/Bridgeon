import { useState,useEffect } from 'react'
import api from './services/api'
import NoteList from './components/NoteList'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     
<NoteList/>
    </>
  )
}

export default App
//  useEffect(()=>{
//     api.get('/notes').then((resp)=>{
//      return(
//       console.log(resp.data[0].name)
//      )
//     })
//   },[])
