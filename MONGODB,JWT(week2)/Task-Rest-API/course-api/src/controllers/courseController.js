import getCourses from "../services/courseService.js";

const getAllCourses=async (req,res)=>{

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
export default getAllCourses