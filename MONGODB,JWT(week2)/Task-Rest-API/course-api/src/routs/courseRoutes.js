import express from 'express'
import {getAllCourses,createNewCourse,getSingleCourse,updateCourseDetails,removeCourse} from '../controllers/courseController.js'
const router=express.Router()
router.get("/",getAllCourses)
router.post("/",createNewCourse)
router.get("/:id",getSingleCourse)
router.patch("/:id", updateCourseDetails);
router.delete("/:id", removeCourse);
export default router