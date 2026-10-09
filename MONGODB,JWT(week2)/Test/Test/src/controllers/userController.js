import { createUser,getUser,updateUser,oneUser } from "../services/userSevice.js";
export const allUser=async (req,res)=>{
  
     try{
      const user=await getUser()
      res.status(200).json({
        success:true,
        data:user
      })
    }
    catch (error){
        res.status(500).json({
            success:false,
            message:'Faild to create user',
            error:error.message
        })
    }

}
export const creteNewUser=async (req,res)=>{
    try{
      const user=await createUser(req.body)
      res.status(201).json({
        success:true,
        data:user
      })
    }
    catch (error){
        res.status(500).json({
            success:false,
            message:'Faild to create user',
            error:error.message
        })
    }
}
export const update=async (req,res)=>{
    try{
      const user=await updateUser(req.params.id,req.body)
      res.status(201).json({
        success:true,
        data:user
      })
    }
    catch (error){
        res.status(500).json({
            success:false,
            message:'Faild to update user',
            error:error.message
        })
    }
}
export const singleUser=async (req,res)=>{
  
     try{
      const user=await oneUser(req.params.id)
      res.status(200).json({
        success:true,
        data:user
      })
    }
    catch (error){
        res.status(500).json({
            success:false,
            message:'Faild to find user',
            error:error.message
        })
    }

}