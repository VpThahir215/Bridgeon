import { register,loginUser } from "../services/authService.js"

export const authRegister=async (req,res,next)=>{
    try{
      const user=await register(req.body)
      res.status(201).json({
       massage:'Registration successfull',
        data:user
      })
    }
    catch (error){
        next(error)
    }
}
export const authLogin=async (req,res,next)=>{
    try{
        const user=await loginUser(req.body)
         res.status(201).json({
       massage:'Registration successfull',
        data:user.token
      })

    }
     catch (error){
        next(error)
     }
}