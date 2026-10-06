import Course from "../models/Course.js";


 export const getCourses=async ()=>{
    const courses=await Course.find({},{title:1,_id:1});
    return courses
}
export const createCourse=async (coursesData)=>{
    const course=await Course.create(coursesData)
    return course   
}
