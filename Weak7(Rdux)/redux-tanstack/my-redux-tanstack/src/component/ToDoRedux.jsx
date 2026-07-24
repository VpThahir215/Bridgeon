import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addNote, doEdit } from './toDo'
import { doDelete } from './toDo'
function ToDoRedux() {
    const dispatch=useDispatch()
    const doToDo=useSelector((state)=>state.note.note)
    const [inpNote,setNote]=useState("")
    const [editId,setEditId]=useState(null)
  return (
    <div>
      <h1>To-Do</h1>
      <textarea value={inpNote}
      onChange={((e)=>setNote(e.target.value))}
      name="" id="" placeholder='Text.....'></textarea>
      <button 
      onClick={()=>{
        if(editId===null){
            dispatch(addNote(inpNote))
        }else{
            dispatch(doEdit({
                index:editId,
                text:inpNote
            }))
        }
      }  }
      >Save</button>
      {
        doToDo.map((val,index)=>{
            return (
                <div key={index}>
                    <h1>{val}</h1>
                    <button 
                    onClick={()=>dispatch(doDelete(index))}
                    >Delete</button>
                    <button
                    onClick={()=>{setEditId(index),setNote(val)}}
                    >Edit</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default ToDoRedux
