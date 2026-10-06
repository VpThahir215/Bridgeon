import {getCourses,createCourse} from "../services/courseService.js";

export const getAllCourses=async (req,res)=>{

    try{
        const course=await getCourses()
        res.status(200).json({
            success:true,
            data:course
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:'Faild to fetch courses'
        })
    }


}   
export const createNewCourse=async(req,res)=>{
    try{
        const course=await createCourse(req.body);
       
        
        res.status(201).json({
            success:true,
            data:course
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Faild to create course",
            error:error.message
        })
    }
}
