import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
    const inpref=useRef(null)
    function focusInp(){
        inpref.current.focus()
    }
  return (
    <div>
        <input ref={inpref} type="text" name="" id="" placeholder='Please Enter your name.....'/>
      <button onClick={focusInp}>Click for Ref</button>
    </div>
  )
}

export default UseRef
