import { register,loginUser } from "../services/authService.js"
export const authRegister=async (req,res)=>{
    try{
      const user=await register(req.body)
      res.status(201).json({
       massage:'Registration successfull',
        data:user
      })
    }
    catch (error){
        res.status(500).json({
            success:false,
            message:'Registeration Faild',
            error:error.message
        })
    }
}
export const authLogin=async (req,res)=>{
    try{
        const user=await loginUser(req.body)
         res.status(201).json({
       massage:'Registration successfull',
        data:user
      })

    }
     catch (error){
        res.status(500).json({
            success:false,
            message:'Registeration Faild',
            error:error.message
        })
    }
}