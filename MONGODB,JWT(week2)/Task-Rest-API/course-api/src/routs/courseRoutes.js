import express from 'express'
import {getAllCourses,createNewCourse} from '../controllers/courseController.js'
const router=express.Router()
router.get("/",getAllCourses)
router.post("/",createNewCourse)
export default router