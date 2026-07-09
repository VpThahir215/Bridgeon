import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'


function One() {
    let {id}=useParams()
    let navigate=useNavigate()
  return (
    <div>

      <h1>One {id}</h1>
      <button onClick={()=> navigate('/one/1')}>to one</button>
       <button onClick={()=> navigate('/tow/2')}>to Tow</button>
        <button onClick={()=> navigate('/three/3')}>to Three</button>
    </div>
  )
}

export default One
