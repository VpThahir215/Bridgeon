import React, { useState } from 'react'
import products  from '/data/api.json'
import BeforCart from './cartButtons/BeforCart'
import AfterCart from './cartButtons/AfterCart'
import { useDispatch, useSelector } from 'react-redux'

function ProductList() {
  const cartCount=useSelector((state)=>state.cart)

  
   
    
    
  return (
    <div className='w-full flex p-6  justify-between'>
        <h1>PorductList</h1>
    
      <section className='grid grid-cols-3 gap-6 mt-6'>
        {
            products.map((product,key)=>{
              return (  <div className="main" key={key}>
                    <img src={product?.image} alt="" className='size-100 w-110 '/>
                    <h1 className='mt-3 font-semibold text-center'>{product?.title}</h1>
                    {cartCount >0?  <BeforCart/>    : <AfterCart/> 
                }
                  
                </div>
             ) })
        }
      </section>
        <img src='/shopping-cart.png' alt="" className=' size-20'/>
    </div>
  )
}

export default ProductList
