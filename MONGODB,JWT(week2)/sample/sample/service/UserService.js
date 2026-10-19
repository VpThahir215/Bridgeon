import User from "../models/userModel.js"
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
  
        const user=User.create(userData)
   return user
}
export const updateUser=async (id,userData)=>{
  
        const user=await User.findByIdAndUpdate(id,userData,{
            returnDocument:'after',
            runValidators:true
        })
   return user
}

