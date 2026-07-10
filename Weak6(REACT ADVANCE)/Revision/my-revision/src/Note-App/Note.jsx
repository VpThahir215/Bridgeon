import React, { useEffect, useRef, useState } from 'react'
import api from '../axios'

function Note() {
    let [inpText,setInp]=useState("")
    let [show,setShow]=useState([])
    let [editid,setEditId]=useState(null)
    let inpRef=useRef()

  useEffect(()=>{
         fetchNote()
    },[])

async function saveHandl(){
    await api.post('/note',{text:inpText}).then((res)=>{
        alert("okk")
         fetchNote()
        
    })

   
}
async function fetchNote() {
    await api.get('/note').then((res)=>{
       setShow(res.data)
         
    })
    
}
async function deleteHandl(id) {
    await api.delete(`/note/${id}`).then(()=>{
        alert("Deleted")
        fetchNote()
    })
    
}
 function Edit(val) {
inpRef.current.focus()
setInp(val.text)
setEditId(val.id)
 }
 async function update() {
    await api.put(`/note/${editid}`,{
        text:inpText
    }),
    alert("Updated")
    setInp("")
    setEditId("")
    fetchNote()

}
  return (
    <div>
      <textarea
      value={inpText}
      ref={inpRef}
       onChange={(e)=>setInp(e.target.value)}
       name="" id=""></textarea>
       <h1>{inpText}</h1>
      <button onClick={ editid ? update : saveHandl}>{editid ? "Update" : "Save"}</button>
        {
            show.map((val)=>{
               return(
                <div key={val.id}>
                  <h1>{val.text}</h1>
                  <button onClick={(()=>deleteHandl(val.id))}>Delete</button>
                  <button onClick={()=>Edit(val)}>Edit</button>
                </div>
               )
            })
        }
        

    </div>
  )
}

export default Note
