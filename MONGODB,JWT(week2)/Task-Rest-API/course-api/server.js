import express from 'express'
import 'dotenv/config'
import connectDb from './src/config/db.js'
import courseRoutes from './src/routs/courseRoutes.js'
import mongoose from 'mongoose'

const app=express()
const PORT=process.env.PORT
console.log('hey',PORT);

app.use(express.json())

app.use("/api/courses",courseRoutes)
app.get("/",async(req,res)=>{
   
    res.json({
        message:"heyy"
    })

})

const startServer=async()=>{
    try{
        await connectDb()
        app.listen(PORT,()=>{
    console.log(`Start server on port ${PORT}`) 
    console.log("MongoDb connection",mongoose.connection.readyState);
    
})

    }catch(error){
        console.log('MongoDb connection Faild',error);
        process.exit(1)
    }
}
startServer()
