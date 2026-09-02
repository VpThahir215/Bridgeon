import React from 'react'
import { useState } from 'react'

const CheckBox = () => {
      let arr=["Gte","DSA","JAVA","C++","Web Development"]
    let [option,setOption]=useState([])
    console.log(option)
    function inpHandle(val){
        if(option.includes(val)){
            setOption(option.filter((item)=> item !== val))
        }else{
            setOption([...option,val])
        }
    }   
  return (
    <div>
         {
              arr.map((val)=>{
             return   (
                 <div>
                 <input   val={val}  type="checkBox" onChange={()=>inpHandle(val)}></input>
                 <span>{val}</span>

                     
                     </div>
             )
                  
                  
              })
              
          }

          <h1>Selected Items</h1>
        
          {
              option.map((val)=>(
                  <p>{val}</p>
              ))
          }
      
    </div>
  )
}

export default CheckBox
