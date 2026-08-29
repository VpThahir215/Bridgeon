import React from 'react'
import { useState } from 'react'

const Pagination = () => {
    const product=[
        "product1",
        "product2",
        "product3",
        "product4",
        "product5",
        "product6",
         "product7",
         "product8",
         "product9",
         "product10",
 ]
    const [currentPage,setCurrentPage]=useState(1)
    const perPage=3
    const startIndex=(currentPage -1) * perPage
    const Items=product.slice(startIndex,startIndex+perPage)
  return (
    <div>
        {
            Items.map((product)=>{
              return  <h1 key={product}>{product}</h1>

            })
        }
        <button onClick={()=>setCurrentPage(currentPage-1)}
        disabled={currentPage===1}
        >Previsious</button>
        <span>{currentPage}</span>
        <button
        onClick={()=>setCurrentPage(currentPage+1)}
        disabled={
            currentPage===Math.ceil(product.length/perPage)
        }
        >Next</button>
      
    </div>
  )
}

export default Pagination
