import React from 'react'
import { useState } from 'react'



function Form() {
  
    const [name,setName]=useState("")
        function handleSubmit(event){
            event.preventDefault()
            if(name===""){
                alert("Name is required");
            }
            else{
                alert("Form Sumbmitted")
            }
        }
    

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={(e)=>setName(e.target.value)}/>
    
    <button type='submit'>Submit</button>
    
    </form>
      
    </div>
  )
}

export default Form
