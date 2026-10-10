import express from 'express'

const app=express()


app.use(express.json())
app.get('/greeting',(req,res)=>{
    const value=req.query
    res.json({
        massage:"okkkk",
        data:value
    })
})


app.listen(3001,()=>{
    console.log('server running.....');
    
})