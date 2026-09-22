// const { log } = require('console')
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.end("Hello from my server!")
// })
// server.listen(5000,()=>{
//     // console.log("server running on port 5000")
//     log('server running on port 5000')
// })

// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.end(' Hello Server..!')
// })
// server.listen(5000,()=>{
//     console.log('Server running on port 500')
// })
const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send("heeelllo")
})
app.listen(5000,()=>{
    console.log("running on port 5000");
    
})