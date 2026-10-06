import Course from "../models/Course.js";


const getCourses=async ()=>{
    const courses=await Course.find();
    return courses
}
export default getCourses   