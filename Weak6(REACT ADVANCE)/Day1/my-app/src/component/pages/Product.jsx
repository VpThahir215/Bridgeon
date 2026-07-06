import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  let {id}= useParams()
  let bikes=[
    {id:3 ,name:"HIMALAYAN 450"},
      {id:4,name:"HIMALAYAN 411"}
  ]
  const bike=bikes.find(b=>b.id ===Number(id))
  
  return (
    <div>
      <h1>{bike?.name}</h1>

    </div>
  )
}

export default Product
