import React from 'react'
import { memo } from 'react';

const ChildeMemo=memo(function ChildeMemo({name}){
console.log("Child rerendered");

 return (
    <div>
        <h1>{name}</h1>
      
    </div>
  )
})


// function ChildeMemo({name}){
// console.log("Child rerendered");

// return (
//   <div>
//       <h1>{name}</h1>
      
//    </div>
//   )


// }

export default ChildeMemo
