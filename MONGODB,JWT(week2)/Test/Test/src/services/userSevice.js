import mongoose from "mongoose";
import User from "../models/userModel.js";
 export const getUser=async ()=>{
    const datas=await User.aggregate    ([
        {
            $match:{
                age:{
                    $lte:40
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
    return datas
}
export const createUser=async (userData)=>{
    const data=await User.create(userData)
    return data
}
export const updateUser=async (id,updateData)=>{
    const data=await User.findByIdAndUpdate(id,updateData, {new:true,runValidators:true})
    return data
}
export const oneUser=async (id)=>{
    const data=await User.findById(id)
    return data
}