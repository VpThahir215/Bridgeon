import Course from "../models/Course.js";


 export const getCourses=async ()=>{
    const courses=await Course.find({},{title:1,_id:1});
    return courses
}
export const createCourse=async (coursesData)=>{
    const course=await Course.create(coursesData)
    return course   
}
export const getCoursesById=async (id)=>{
    const course=await Course.findById(id)
    return course
}
export const updateCourse = async (id, courseData) => {
  const course = await Course.findByIdAndUpdate(
    id,
    courseData,
    {
      new: true,
      runValidators: true
    }
  );

  return course;
};
export const deleteCourse=async (id)=>{
    const course=await Course.findByIdAndDelete(id)
    return course
}