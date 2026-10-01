import express, { json } from 'express'
import "dotenv/config";
import cors from 'cors'
import mongoose from 'mongoose';
import {MongoClient} from 'mongodb'


const client=new MongoClient(process.env.MONGO_URI)
await client.connect();
const db=client.db('user')
const students=db.collection('students')
const app=express()
const PORT=process.env.PORT || 5001
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('MongoDb connected...')

}).catch((error)=>{
    console.log('MongoDb connections Faild',error);
    
})
app.get('/',async(req,res)=>{
    const data=await students.find({age:19},{projection:{name:1,_id:0}}).toArray()
    res.json(data)
})
app.listen(PORT,()=>{
    console.log("Server started on port : 5001")
})