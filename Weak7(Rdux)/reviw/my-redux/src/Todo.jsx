import React, { useState } from 'react'
import api from './api'
import {useQuery,useQueryClient,useMutation} from '@tanstack/react-query'

function Todo() {
const query=useQueryClient()
    const [note,setNote]=useState("")
    const [editId,setEditId]=useState(null)

const {data,isSuccess}=useQuery({
    queryKey:['ToDo'],
    queryFn: async()=>{
        const res=await api.get('/notes')

        return res.data
    }

})

const {mutate}=useMutation({
mutationFn:async ()=>{
        await api.post('/notes',{
            text:note
        })
    }
})





  return (
    <div>
      <h1>To-do</h1>
      <textarea 
      onChange={((e)=>{setNote(e.target.value)})}
      name="" id="" placeholder='Text.....'></textarea>
    <button 
    onClick={()=>mutate()}
    >Save</button>
    <h1>{note}</h1>
    </div>
  )
}

export default Todo
