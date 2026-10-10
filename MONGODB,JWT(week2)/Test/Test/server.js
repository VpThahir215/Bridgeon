import express, { json } from 'express'
import 'dotenv/config'
import connectMongodb from './src/config/db.js'
import mongoose from 'mongoose'
import route from './src/routes/userRoute.js'
import Aroute from './src/routes/authRoutes.js'
import errorMiddleware from './src/middleware/errorMiddleware.js'

const app=express()
app.use(json())
app.use(express.static('public'))
app.use('/api/auth',route)
app.use('/api/authentication',Aroute)
app.use(errorMiddleware)
const PORT=process.env.PORT
app.get('/main',(req,res)=>{
    res.status(201).json({
        Massage:"Hi Welcome"
    })
})



const startServer=async ()=>{
    try{
        await connectMongodb()
        app.listen(PORT,()=>{
            console.log(`Server run on ${PORT}`);
            console.log('Mongodb connection ',mongoose.connection.readyState    );
            
            
        })

    }catch(error){
        console.log('Mongodb connection faild ',error);
        process.exit(1)
        
    }
}
startServer()