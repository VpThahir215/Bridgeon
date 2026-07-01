    import React from 'react'
    import { useState } from 'react'

    function List3() {

        const [inp,setInp]=useState("")
        const [arr,setArr]=useState([])
        function add(a){
        setArr([...arr,a])
        setInp("")
        
        
        
        
        
        
        
            

        }
    return (
        <div>
        <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)}/>
        <button onClick={()=>add(inp)}>List</button>
     
        {
            arr.map((val,index)=>(
                <h1 key={index}>Key:{index} {val}</h1>
            )
       ) }
        </div>
    )
    }

    export default List3

    