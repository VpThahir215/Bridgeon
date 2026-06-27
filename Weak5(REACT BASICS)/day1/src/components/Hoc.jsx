import React from 'react'


function Hoc(Component) {
  return function (){
    return (
    <div>
        <h1>Welcome</h1>
        <Component/>
      
    </div>
  )
  } 
}

export default Hoc
