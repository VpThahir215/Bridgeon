import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerUser = async ({ name, email, password }) => {
      const hashedPassword=await bcrypt.hash(password,10)   
  const user = await User.create({
    name,
    email,
    password:hashedPassword
  });


  return user;
}
export const  loginUser = async({email,password})=>{
const user=await User.findOne({email})
if(!user){
    throw new Error('Invalid email or password')
}
const isPasswordCorrect=await bcrypt.compare(password,user.password)
if(!isPasswordCorrect){
    throw new Error('Invalid email or password')

}
const token=jwt.sign(
    {
        userId:user._id,
        email:user.email,
    },
        process.env.JWT_SECRET,
        {
            expiresIn:"1h"
        },
)
return{
    user,
    token
}
}
