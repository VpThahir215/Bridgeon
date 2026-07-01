import React from 'react'
import { useState } from 'react'

function Hi() {
const [red,setRed]=useState(true)




  return (
    <div>
      <div style={{ color: red? "red":"green"}} onClick={()=>setRed(!red)}>Rono</div>
          <div style={{ color: red? "green":"red"}} onClick={()=>setRed(!red)}>Messi</div>
    
    </div>
  )
}

export default Hi
