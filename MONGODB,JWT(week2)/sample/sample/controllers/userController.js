import { getUser,createUser,updateUser } from "../service/UserService.js";
export const allGetUser=async (req,res)=>{
   try{
    const user=await getUser()
    res.status(200).json({
        success:true,
        data:user
    })
   }
   catch(error){
     res.status(500).json({
        success:false,
        message:error.message
     })
    
   }
}
export const create=async (req,res)=>{
   try{
    const user=await createUser(req.body)
    res.status(200).json({
        success:true,
        data:user
    })
   }
   catch(error){
     res.status(500).json({
        success:false,
        message:error.message
     })
    
   }
}
export const update=async (req,res)=>{
   try{
    const user=await updateUser(req.params.id,req.body)
    res.status(200).json({
        success:true,
        data:user
    })
   }
   catch(error){
     res.status(500).json({
        success:false,
        message:error.message
     })
    
   }
}

