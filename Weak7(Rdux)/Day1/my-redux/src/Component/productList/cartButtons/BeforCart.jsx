import React from 'react'
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../redux/Cart';

function BeforCart() {
    const dispatch=useDispatch();
  return (
    <div className=''>
        <button onClick={()=>dispatch(addToCart())}>Add to Cart</button>
      
    </div>
  )
}

export default BeforCart
