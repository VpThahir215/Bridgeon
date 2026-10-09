import mongoose from "mongoose";
const userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            lowercase:true
        },
        password:{
            type:String,
            minLength:6,
            required:true

        },
      
        
    },
    {
        timestamps:true
    }
)
const Auth=mongoose.model("Auth",userSchema)
export default Auth

