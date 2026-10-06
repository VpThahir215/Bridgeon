import {getCourses,createCourse,getCoursesById,updateCourse,deleteCourse} from "../services/courseService.js";

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
export const getSingleCourse=async (req,res)=>{
    try{
        const course=await getCoursesById(req.params.id)
        if(!course){
            res.status(404).json({
                success:false,
                message:'Course not found'
            })
        }
        res.status(200).json({
            success:true,
            data:course
        })
    }catch (error){
       res.status(500).json({
        success:false,
        message:'Faild to fetch course'
       })
    }
}
export const updateCourseDetails = async (req, res) => {
  try {
    const course = await updateCourse(
      req.params.id,
      req.body
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update course"
    });
  }
};

export const removeCourse=async (req,res)=>{
    try{
        const course=await deleteCourse(req.params.id)
        if(!course){
            res.status(404).json({
                success:false,
                message:'Course not found'
            })
        }
        res.status(200).json({
            success:true,
           message:'Course deleted successfully'
        })
    }catch (error){
       res.status(500).json({
        success:false,
        message:'Faild to delete course'
       })
    }
}