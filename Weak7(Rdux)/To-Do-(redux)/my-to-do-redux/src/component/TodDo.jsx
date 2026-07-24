import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addNote } from './toDo'
import { doDelete } from './toDo'
import { doEdit } from './toDo'
import { store } from '../cart'
function TodDo() {
    const useToDo=useSelector((state)=>state.note.note)
    const [note,setNote]=useState("")
    const dispatch=useDispatch()
    const [editNote,setEditNote]=useState(null)

  return (
    <div>
      <h1>To-Do-App</h1>
      <textarea
      onChange={((e)=>setNote(e.target.value))}
     value={note}  name="" id="" placeholder='Type......'></textarea>
     <button onClick={()=>{
      if(editNote===null){
        dispatch(addNote(note))
      }else{
        dispatch(doEdit({
          index:editNote,
          text:note
        }))
      }
      setNote("")
     }}>Save</button>
       {
        useToDo.map((val,index)=>{
            return (
                <div >
<h1>{val}</h1>
<button
onClick={()=>dispatch(doDelete(index))}
>Delete</button>
<button onClick={()=>{setEditNote(index),setNote(val)}}>Edit</button>
                </div>
            )
        })
       }
    </div>
  )
}

export default TodDo
