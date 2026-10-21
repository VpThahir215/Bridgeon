import User from "../models/userModel.js"
import bcrypt from 'bcrypt'

export const getUser=async ()=>{
  
        const user=User.aggregate([
            {
                $match:{
                    age:{
                        $gte:20
                    }
                }
            },
            {
                $project:{
                    name:1,
                    _id:0
                }
            }
        
        ])
   return user
}
export const createUser=async (userData)=>{
    const {name,email,password,age}=userData
    const hashedPassword=await bcrypt.hash(password,10)
  
        const user=User.create({name,email,age,password:hashedPassword})
       
        
       
        
   return user
}
export const updateUser=async (id,userData)=>{
  
        const user=await User.findByIdAndUpdate(id,userData,{
            returnDocument:'after',
            runValidators:true
        })
   return user
}

