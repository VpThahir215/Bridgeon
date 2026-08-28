import React, { useState } from 'react'

const ReactMemo =React.memo (({name}) => {
    console.log("React memo updating.....");
    const [name,setName]=useState()
    
  return (
    <div>
        <button onClick={setName("Ronaldo")}>Change name</button>
      <h1>React Memo  :{name}</h1>
    </div>
  )
})

export default ReactMemo
