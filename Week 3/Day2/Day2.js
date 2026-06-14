 let err=false;
function add(num1,num2,callback){
    

   
    if(num1===0){
        err=true;
    }
    callback(num1+num2)
}
function mult(num1,num2,callback){
    callback(num1*num2)
}
function sub(num1,num2,callback){
    callback(num1-num2)
}
add(1,20,(sum,callback)=>{
if(err){
    console.log("You entered number is zeero");
    return;
}else{
    console.log(sum);
    
}
mult(sum,sum,(mul)=>{
    console.log(mul);
    sub(mul,1,(sub)=>{
    console.log(sub);
    
})
    
})



})


const Promise=require('promise');

function addtition(num1,num2){
return new Promise((resolve,reject)=>{
    if(num1===0){
        reject("The first number is zeero")
    }
    resolve(num1+num2)
})
}
function multiplication(num1,num2){
return new Promise((resolve,reject)=>{
    if(num1===0){
        reject("The first number is zeero")
    }
    resolve(num1*num2)
})
}
function div(num1,num2){
return new Promise((resolve,reject)=>{
    if(num1===0){
        reject("The first number is zeero")
    }
    resolve(num1/num2)
})
}
addtition(10,20).then((ad)=>{
    console.log(ad);
    return multiplication(ad,ad);
    
}).then((mult)=>{
    console.log(mult);
    return div(mult,2);
}).then((div)=>{
    console.log(div);
    
}).catch((reject)=>{
    console.log(reject);
    
})


function getName(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("Thahir")
      },3000)
    })
}

function getNumber(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("9946659082")
      },2000)
    })
}

// Promise.all([getName(),getNumber()]).then((result)=>{
//     console.log(result);
    
// })

async function user(){
    let name=await getName();
    console.log(name);
    
}
user()