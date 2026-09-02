import React, { useState } from 'react'

const BoxColorChange = () => {
const [color,setColor]=useState("black")
   const arr=["red","blue","yellow"]
    const [colorr,setColorr]=useState("black")

  return (
    <div>
          <div style={{display:"flex", padding:"10px" }}>

           {  arr.map((val)=>(
            <div style={{ display:"flex" ,width:"100px" ,height:"100px ", background:val ,margin:"10px" }} onClick={()=>setColorr(val)}>
            </div>
        ))
          }
           </div>
          <div style={{width:"100px",height:"100px",background:colorr}}>  </div>
        <div style={{display:"flex", padding:"10px" }}>


        <div style={{backgroundColor:"red",width:"100px" ,height:"100px", marginRight:"10px"}} onClick={()=>setColor("red")}>
            

        </div>
         <div style={{backgroundColor:"green",width:"100px" ,height:"100px", marginRight:"10px"}} onClick={()=>setColor("green")}>
            

        </div>
         <div style={{backgroundColor:"blue",width:"100px" ,height:"100px", marginRight:"10px"}}onClick={()=>setColor("blue")}>
            

        </div>
        </div>
        <div style={{border:"2px solid black" ,width:"100px" ,height:"100px" ,backgroundColor:color}}></div>
        
      
    </div>
  )
}

export default BoxColorChange
