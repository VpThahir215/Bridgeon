import React, { useState } from 'react'
import Child from './Child'


function Memo() {
    let [count,setCount]=useState(0)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Memo</button>
      <h1>{count}</h1>
       <Child name="CR7"/>
    </div>
   
  )
  
}
 <Child name="CR7"/>

export default Memo
