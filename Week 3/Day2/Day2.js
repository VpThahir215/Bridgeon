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