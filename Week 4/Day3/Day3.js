// // // Shallow Copy

// // const { resolve, reject } = require("promise");




// // let user={
// //     name:"Ronaldo",
// //     Personel:{
// //         nation:"Portugal"
// //     }
// // }
// // let copy={...user}
// // copy.Personel.nation="Argentina";
// // console.log(user.Personel.nation);



// // // Deep Copy


// // let userr={
// //     name:"Ronaldo",
// //     Personel:{
// //         nation:"Portugal"
// //     }
// // }
// // let copyy=structuredClone(userr)
// // copy.Personel.nation="Argentina";
// // console.log(userr.Personel.nation);


// // // Weak set()

// // let a=new Set()

// // a.add(10);
// // a.add(20);
// // a.add(10);
// // console.log(a);
// // console.log({name:"Thahir"});


// // let b=new WeakSet ();
// // b.add({place:"Kodinhi"})
// // console.log(b);


// // let k=[1,2,2,3,4,2,3,3]
// // let c=new Set(k);
// // console.log(c);



// // const map = new WeakMap();
// // let us={}


// // map.set(us,"Rono");
// // console.log(map.get(us));



// // //  Optional Chaining (?.)



// // let e={
// //     name:"Ronaldo"
// // }

// // console.log(e.place?.citty);



// // // Nullish coalescing


// // let f=null;
// // let f1=f??"thahir";
// // console.log(f1);






// // let z=[1,2,2,3,3,4,4,5,5,6,6,7,3];
// // let y=new Set(z);
// // console.log(y);
// // let x=[...y];
// // console.log(x);


// // // const input = document.getElementById("search");

// // // let timer;

// // // input.addEventListener("input", () => {

// // //     console.log("You pressed a key");

// // //     // Cancel the previous timer
// // //     clearTimeout(timer);

// // //     // Start a new timer
// // //     timer = setTimeout(() => {
// // //         console.log("Searching...");
// // //     }, 1000);

// // // });

// // // let input=document.querySelector("#search");
// // // let timerr;
// // // input.addEventListener("input",()=>{
// // //     console.log("Starting");
// // //     clearTimeout(timerr);
// // //     setTimeout(()=>{
// // //     console.log("compleated");

// // //     },1000)
    
// // // })




// // // async function l(){
// // // let url=("https://jsonplaceholder.typicode.com/users");
// // // try{
// // //     let arr=[];
// // //     let response=await fetch(url);
// // //     let data=await response.json();

// // //     arr.push(data[0].name.toUpperCase());
// // //     arr.push(data[0].company.name);
// // //     console.log(data[0].id);
// // //   console.log(arr);
  
    
    
// // // }catch(error){
// // //     console.log("wrong");
    

// // // }
// // // }
// // // l()


// // let url=("https://jsonplaceholder.typicode.com/users");
// // let arr=[]
// // fetch(url)
// // .then((response)=>{
// //     return response.json();
// // })
// // .then((data)=>{
// //     arr.push(data[0].name.toUpperCase());
// //     arr.push(data[0].company.name);
// //     console.log(arr);
    
// // })
// // .catch ((error)=>{
// //     console.log("wrong");
    
// // })

// function sam(a){
// return new Promise((resolve,reject)=>{
//     if(a>6){
//         resolve("yes")
//     }else{
//         reject("no")
//     }
// })
// }
// sam(3).then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


// let input=document.querySelector("#search");

// let timer;
  
    
//     input.addEventListener("input",()=>{
//   console.log("Starting");
//     clearTimeout(timer);
//         timer=setTimeout(()=>{
//        console.log("Finished");
       
//     },1000)
        
//     })
    


// let a="thahir";
// a[2]="z";
// console.log(a);


// let a=100;
// let b=a++;
// console.log(a+b);
// console.log(a);
// console.log(b);




