import React from 'react'
import { useState,useEffect } from 'react'

function Fetch() {

    const [dataa,setData]=useState([])

useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=>{
setData(data)
console.log(dataa);

})
},[])



  return (
    <div>
{
    dataa.map((val,index)=>{
        return ( <h1>{val.name}</h1>)
    })
}      
    </div>
  )
}

export default Fetch
