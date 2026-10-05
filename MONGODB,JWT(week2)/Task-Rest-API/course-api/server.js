import express from 'express'
import 'dotenv/config'

const app=express()
const PORT=process.env.PORT
console.log('hey',PORT);

app.use(express.json())
app.get("/",(req,res)=>{
res.json({
    message:"this is okay"
})
})
app.listen(PORT,()=>{
    console.log(`Start server on port ${PORT}`) 
})