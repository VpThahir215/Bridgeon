// import express, { json } from 'express'
// import "dotenv/config";
// import cors from 'cors'
// import mongoose from 'mongoose';
// import {MongoClient} from 'mongodb'
// import bcrypt from 'bcrypt'


// const client=new MongoClient(process.env.MONGO_URI)
// await client.connect();
// const db=client.db('user')
// const students=db.collection('students')
// const app=express()
// const PORT=process.env.PORT || 5001
// const password="VpThahir"
// const hashedPassword=await bcrypt.hash(password,10);

// app.use(cors())
// app.use(express.json())
// mongoose.connect(process.env.MONGO_URI)
// .then(()=>{
//     console.log('MongoDb connected...')
//     console.log(hashedPassword)

// }).catch((error)=>{
//     console.log('MongoDb connections Faild',error);
    
// })

// app.get('/students',async(req,res)=>{
   
//     try{
//         const {gender} =req.query
//         //  const data=await students.find({gender:gender}).toArray()
//         const data=await students.find({name:{$regex:"A",$options:"i"}},{projection:{name:1,_id:0}}).toArray()
//     res.json(data)

//     }catch{
//         res.status(500).json({
//             message:'Failed to fetch students'
//         })

//     }
// })
// app.listen(PORT,()=>{
//     console.log("Server started on port : 5001")
// })

import express from 'express'
const app =express()
app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next()
    
})
app.use(express.static("Public"))

app.get('/',(req,res,)=>{
    res.json({
        message:"Hello world"
    })
})
app.listen(2000,()=>{
    console.log("running....");
    
})