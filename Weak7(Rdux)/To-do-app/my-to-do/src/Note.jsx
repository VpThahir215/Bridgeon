import React, { useEffect, useRef, useState } from 'react'
import { useQueryClient,useQuery,useMutation } from '@tanstack/react-query' 
import api from './api'

function Note() {
    const [note,setNote]=useState("")
    const [editId,setEditId]=useState(null)
 const query=useQueryClient()
 const inpRef=useRef(null)
const {data,isSuccess}=useQuery({
    queryKey:['notes'],
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
    },onSuccess:()=>{
      query.invalidateQueries({
        queryKey:['notes']
      })
      setNote("")
    }
})
const deleteMutation=useMutation({
    mutationFn:async (id)=>{
        await api.delete(`/notes/${id}`)
    },
    onSuccess:()=>{
        query.invalidateQueries({
            queryKey:['notes']
        })
    }
})
const editMutation=useMutation({
    mutationFn:async (note)=>{
    return  await api.patch(`/notes/${note.id}`,{
        text:note.text
      
     })
     
    },
    onSuccess:()=>{
        query.invalidateQueries({
            queryKey:['notes']
        })
        setNote("")
        setEditId("")
    }
    
})
 
 
  return (
    <div>
        <h1>Notes</h1>
        <input ref={inpRef} type="text" placeholder='To-Do' value={note}
        onChange={((e)=>setNote(e.target.value))}
        />
        <button onClick={()=>{
          if (editId===null){
            mutate()
            
          }else{
            editMutation.mutate({
                id:editId,
                text:note
            })
          }
        }} >Save</button>
        {
            data?.map((val)=>{
                return ( 
                <div key={val.id}>
                <h1>{val.text}</h1> 
                <button
                onClick={()=>{
                    inpRef.current.focus()
                    setEditId(val.id)
                         setNote(val.text)
                }
                }
                >Edit</button>
                <button
                onClick={()=>deleteMutation.mutate(val.id   )}
                >Delete</button>
</div>
                )
            })
        }
    </div>
  )
}

export default Note