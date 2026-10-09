import { allUser,creteNewUser,singleUser,update } from "../controllers/userController.js";
import express from 'express'
const route=express.Router()
route.post("/",creteNewUser)
route.get("/",allUser)
route.get("/:id",singleUser)
route.patch("/:id",update)
export default route