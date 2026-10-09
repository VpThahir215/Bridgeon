import Auth from '../models/authModels.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'



export const register=async ({name,email,password})=>{
      const hashedPassword=await bcrypt.hash(password,10)
    const data=await Auth.create({name,email,password:hashedPassword})
   return data
  

}
export const loginUser=async ({email,password})=>{
    const data= await Auth.findOne({email})
    if(!data){
        throw new Error('Invalid....')
    }
    const isCompare=await bcrypt.compare(password,data.password)
    if(!isCompare){
    throw new Error('Invalid email or password')

}
    const token=jwt.sign(
        {
            name:data.email,
            id:data._id
        },
        
            process.env.JWT_SECRET,
        {
          expiresIn:'1h'
        }
    )
    return {
        data,
        token
    }
}