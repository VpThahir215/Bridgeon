import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrement, incriment } from '../../redux/Cart';

function AfterCart() {
    const dispatch=useDispatch();
    
  const cartCount=useSelector((state)=>state.cart.cartCount)
  
  return (
    <div className=''>
        <button className='bg-[#FF1D8D] text-white p-4 rounded' onClick={()=>dispatch(incriment())} >+</button>
         <div>{cartCount}</div>
         <button className='bg-[#FF1D8D] text-white p-4 rounded' onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default AfterCart
