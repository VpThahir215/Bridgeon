import mongoose from "mongoose";
const enrollmentSchema=mongoose.Schema(
    {
        student:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        course:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
            required:true

        },
        status:{
            type:String,
            enum:['active','cancelled'],
            default:'active'
        }
    },
        {
            timestaps:true
        }
)
const Enrollment=mongoose.model('Enrollment',enrollmentSchema)
export default Enrollment;
