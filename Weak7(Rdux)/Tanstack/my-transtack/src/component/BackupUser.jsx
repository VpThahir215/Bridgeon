import { useQueryClient } from '@tanstack/react-query'
import React from 'react'

function BackupUser() {
   const query= useQueryClient()
   const    product=query.getQueryData(["products"])
   console.log(product,"==product");
    
  return (
    <div>
     <h1>BackupUser</h1> 
     <ul>
  {product
    ?.filter((pro) => pro.id === "2")
    .map((pro) => (
      <li key={pro.id}>{pro.title}</li>
    ))}
</ul>
    </div>
  )
}

export default BackupUser
