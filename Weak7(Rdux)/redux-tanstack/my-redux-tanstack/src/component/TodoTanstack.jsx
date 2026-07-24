import React, { useState } from 'react'
import api from '../api'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'

function TodoTanstack() {
    const query = useQueryClient()
    const [note, setNote] = useState("")
    const [editId,setEditId]=useState(null)
    const { data, isSuccess } = useQuery({
        queryKey: ['ToDo'],
        queryFn: async () => {
            const res = await api.get('/notes')

            return res.data
        }

    })
    const { mutate } = useMutation({
        mutationFn: async () => {
            await api.post('/notes', {
                text: note
            })
        },
        onSuccess: () => {
            query.invalidateQueries({
                queryKey: ['ToDo']
            })
        },


    })
    const doDelete = useMutation({
        mutationFn: async (id) => {
            await api.delete(`/notes/${id}`)

        },
        onSuccess: () => {
            query.invalidateQueries({
                queryKey: ['ToDo']
            })
        }
    })
    const doEdit=useMutation({
        mutationFn: async (note)=>{
            await api.patch(`/notes/${note.id}`,{
                 text:note.text
            })
            
        },
        onSuccess:()=>{
            query.invalidateQueries({
                queryKey:['ToDo']
            })
        }
    })






return (
    <div>
        <h1>To-Do-Tanstack</h1>


        <textarea
           value={note} onChange={((e) => setNote(e.target.value))}
            name="" id="" placeholder='Text.......'></textarea>

        <button onClick={()=>{
            if(setEditId===null){
                mutate()
            }else{
                doEdit.mutate({
                    id:editId,
                    text:note
                })
            }
        }}>Save</button>
        {
            data?.map((val, index) => {
                return (
                    <div key={index}>
                        <h1>{val.text}</h1>
                        <button
                            onClick={() => doDelete.mutate(val.id)}
                        >Delete</button>
                        <button
                        onClick={()=>{
                            setEditId(val.id)
                            setNote(val.text)
                        }}
                        >Edit</button>
                    </div>

                )
            })
        }
    </div>
)

}


export default TodoTanstack
