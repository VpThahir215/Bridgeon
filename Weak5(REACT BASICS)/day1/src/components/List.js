import React from 'react'

function List() {
let arr=["One","Tow","Three"]
let object=[
  {Bike:"HIMALAYAN 450" , Color:"Black"},
   {Bike:"YEZDI" , Color:"White"},
    {Bike:"KTM " , Color:"Orange"},
]


  return (
    <>
        {arr.map((val,index)=>{
          return(  <h1>{val}</h1>)
        })}
        {object.map((val,index)=>{
          return(
            <h1  style={{color:"red"}}>Bike:{val.Bike} , Color:{val.Color}</h1>
          )
        })}
      
    </>
  )
}

export default List
