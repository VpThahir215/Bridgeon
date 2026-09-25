import express, { json } from 'express'
import fs from 'fs'
const app=express()
app.use(json())

app.get('/test',(req,res)=>{
    fs.readFile('../data/server.json','utf8',(err,data)=>{
        console.log(data);
        
        res.status(200).json({
            message:data
        })
    })
})
app.put('/test/:id',(req,res)=>{
    fs.readFile('../data/server.json','utf8',(err,data)=>{
         const user=JSON.parse(data)
             const id=Number(req.body.id)
             const us=user.find(val=>val.id===id)
             us.name=req.body.name
              us.mail=req.body.mail
               us.place=req.body.place
         fs.writeFile('../data/serve.json',JSON.stringify,(err)=>{
             res.json({
          data:us
       })

         })
       
    })
})







app.listen(3000,()=>{
    console.log('running...')
})