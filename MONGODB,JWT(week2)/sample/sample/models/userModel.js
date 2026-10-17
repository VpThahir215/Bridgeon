import mongoose, { Types } from "mongoose";
const userScheema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true


        },
        email:{
            type:String,
            required:true,
            lowercase:true,
            unique:true,
            trim:true

        },
        password:{
            type:String,
            required:true,
            minlength:6
        },
        age:{
            type:Number,
            required:true,

        }
    },
    {
        timestamps:true
    }
)
const User=mongoose.model("User",userScheema)
export default User