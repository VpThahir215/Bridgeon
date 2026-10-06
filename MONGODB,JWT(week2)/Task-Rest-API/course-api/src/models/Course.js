import mongoose from "mongoose";
const courseSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            required:true,
            trim:true

        },
        instractor:{
            type:String,
            required:true,
            trim:true
        },
        price:{
              type: Number,
      required: true,
      min: 0
        },
        duration:{
            type: String,
      required: true,
      trim: true

        }
    },
    {
        timestamps:true
    }
)
const Course=mongoose.model("Course",courseSchema)
export default Course