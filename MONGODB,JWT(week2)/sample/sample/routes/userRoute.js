import express from 'express'
import { allGetUser ,create,update} from '../controllers/userController.js'
const route=express.Router()
route.get('/',allGetUser)
route.post('/',create)
route.patch('/:id',update)
export default route