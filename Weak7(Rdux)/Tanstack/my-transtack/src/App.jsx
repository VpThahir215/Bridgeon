
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import './App.css'
import api from './axios'
import { useState } from 'react'
import BackupUser from './component/BackupUser'

function App() {
  const query=useQueryClient()
  const [showUser,setShowUser]=useState(false)
 const  {data,error,isSuccess,isLoading,isError}=useQuery({
    queryKey:['products'],
    queryFn: async ()=>{
   const res=await  api.get('/products')

   
   return res.data
     
    },
    enabled:showUser
  })
 const {mutate}= useMutation({
    mutationFn:async ()=>{
  await  api('/products',{
    method:"POST",
    data:{
      id:10,
      title:"Access"
    }

   })
    },
    onSuccess:()=>{
      query.invalidateQueries({
         queryKey:['products'],
      })
      
    }
  })
  
if  (isLoading){
  return <h1>Loading...  </h1>
}
if(isSuccess){
  console.log(data,"====firstttttt");
  
}




  return (
    <>



    <button onClick={(()=>setShowUser(true))}>Fetch</button>
        <button onClick={()=>mutate()}>Add </button>
    <h1>List of users</h1>
   
    

      
        <ul>
       { data?.map((product)=>{
        return  <li key={product.id}>{product?.title}</li>
        })
        
      }
        </ul>
      <BackupUser/>
    </>
  )
}

export default App
