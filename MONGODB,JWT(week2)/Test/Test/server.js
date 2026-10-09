import express, { json } from 'express'
import 'dotenv/config'
import connectMongodb from './src/config/db.js'
import mongoose from 'mongoose'

const app=express()
app.use(json())
const PORT=process.env.PORT
app.get('/',(req,res)=>{
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