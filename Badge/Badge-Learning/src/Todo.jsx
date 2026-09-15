import React, { useState } from 'react'
import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import api from './axios'

const Todo = () => {
    const [inp, setInp] = useState("")
    const quaryClient=useQueryClient()
    const mutation=useMutation({
        mutationFn:async (data)=>{
            const response=await api.post('/user',data)
        }
    })

    const { data, isLoading, isError,onSucces } = useQuery({
        queryKey: ['toDo'],

        queryFn: async () => {
            const response = await api.get('/user')
            return response.data
        },
    })
    quaryClient.invalidateQueries({
        queryKey:['toDo']
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error...</h1>
    }

    return (
        <div>
            <input
                onChange={(e) => setInp(e.target.value)}
                placeholder="Search"
            />

            <button onClick={()=>mutation.mutate({name:inp})}>Save</button>

            {data?.map((val) => {
                return (
                    <div key={val}>
                        <h1>{val.name}</h1>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Todo