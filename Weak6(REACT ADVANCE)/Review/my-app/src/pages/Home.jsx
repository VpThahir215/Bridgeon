import React from 'react'
import Context from '../contaxt'
import { useContext } from 'react'

function Home() {
      let {Cname,CsetName}=useContext(Context)
      let {Cemail,CsetEmail}=useContext(Context)
  return (
    <div>
     <h1>{Cname}</h1>
    </div>
  )
}

export default Home
