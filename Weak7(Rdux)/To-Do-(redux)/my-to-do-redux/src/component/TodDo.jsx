import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addNote } from './toDo'
import { store } from '../cart'
function TodDo() {
    const useToDo=useSelector((state)=>state.note.note)
    const [note,setNote]=useState("")
    const dispatch=useDispatch()

  return (
    <div>
      <h1>To-Do-App</h1>
      <textarea
      onChange={((e)=>setNote(e.target.value))}
     value={note}  name="" id="" placeholder='Type......'></textarea>
     <button onClick={()=>dispatch(addNote(note),setNote(""))}>Save</button>
       {
        useToDo.map((val)=>{
            return (
                <div >
<h1>{val}</h1>
                </div>
            )
        })
       }
    </div>
  )
}

export default TodDo
