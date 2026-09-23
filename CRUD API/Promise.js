const order=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Order Finished')
    },2000)
})
async function getOrder(){
     const message= await order
     console.log(message);
     
}
getOrder()