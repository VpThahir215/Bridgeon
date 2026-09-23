import express from'express'
import fs from 'fs'
const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        message:'User Crud Api is running'
    })
})
fs.readFile('../data/user.json','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return
         
    }
   const user=JSON.parse(data)  
    console.log(user);
    
})

app.post('/test',(req,res)=>{

    console.log(req.body);
  const user=  {
name:req.body.name,
mail:req.body.mail,
place:req.body.place,

    }
    res.status(200).json({success:true,
        data:user
    })
     
   
})
app.get('/search',(req,res)=>{
    console.log(req.query);
    res.json({
        name:req.query.name,
        age:req.query.age

    })
})
app.post('/user',(req,res)=>{
    fs.readFile('../data/user.json','utf8',(err,data)=>{
          if(err){ 
            return res.status(500).json({
                success:false,
                message:'Faild to read users'
            })
          }
          const user=JSON.parse(data)
          const newUser={
            id:Date.now(),
            name:req.body.name,
            mail:req.body.mail,
            age:req.body.age
          }
          user.push(newUser)
           fs.writeFile('../data/user.json',JSON.stringify(user,null,2),
(err)=>{
    if(err){
        return res.status(500).json({
            success:false,
            message:'Faild to save users'
        })
    }
    res.status(201).json({
        success:true,
        data:user  
    })
}
)
    
})
    })


    app.get('/user',(req,res)=>{
    fs.readFile('../data/user.json','utf8',(err,data)=>{
        if(err){
            return res.status(500).json({
                success:false,
                message:'Faild to read user'
            })
        }
        const users=JSON.parse(data)
        res.status(200).json({
            success:true,
            data:users
        })
    })
})
app.get('/user/:id',(req,res)=>{
    fs.readFile('../data/user.json','utf8',(err,data)=>{
        if(err){
            return res.status(500).json({
                success:false,
                message:'Faild to read user'
            })
        }
        const user=JSON.parse(data)
        const us=user.find(user=>user.id===Number(req.params.id))
        if(!us){
return res.status(404).json({
    success:false,
    message:'User not found'
})
        }
        res.status(200).json({
            success:true,
            data:us
        })
    })
})

app.put('/user/:id',(req,res)=>{
    fs.readFile('../data/user.json','utf8',(err,data)=>{
        if(err){
            return res.status(500).json({
                success:false,
                message:'Faild to read user'
            })
        }
        const user=JSON.parse(data)
        const olddata=user.find(user=>user.id===Number(req.params.id))
        console.log(olddata);
        
        const us=user.find(user=>user.id===Number(req.params.id))
        us.name =req.body.name
        us.mail =req.body.mail
        us.age =req.body.age
        fs.writeFile('../data/user.json',JSON.stringify(user,null,2),(err)=>{
              if(!us){
return res.status(404).json({
    success:false,
    message:'User not found'
})
        }

        })

      
        res.status(200).json({
            success:true,
          
            data:us,
            
        })
    })
})
app.delete('/user/:id',(req,res)=>{
    fs.readFile('../data/user.json','utf8',(err,data)=>{
            if(err){
                return res.status(201).json({
                    success:false,
                    message:'Faild to read user'

                })
            }
            const user=JSON.parse(data)
            const id=Number(req.params.id)
            const userIndex=user.findIndex(user=>user.id===id)
            if(userIndex == -1){
                return res.status(404).json({
                    success:false,
                    message:'User not found'
                })
            }
            const deleteUser=user.splice(userIndex,1)
            fs.writeFile('../data/user.json',JSON.stringify(user,null,2),
            (err)=>{
                if(err){
                    return res.status(500).json({
                        success:false,
                        message:'Faild to delete user'
                    })
                }
                res.status(200).json({
                    success:true,
                    data:deleteUser
                })
            }
        
        )
    })
})
   
app.listen(3000,()=>{
    console.log('Server running on port 3000');
    
})