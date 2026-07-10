import React, { memo } from 'react'

const Child=memo( function Child({name}) {
    console.log("yesss");
    
    
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
})

export default Child
