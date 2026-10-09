import express from 'express'
import { authRegister,authLogin } from '../controllers/AuthControllers.js'
const Aroute=express.Router()
Aroute.post('/register',authRegister)
Aroute.post('/login',authLogin)
export default Aroute