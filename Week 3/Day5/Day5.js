
//Map()



let a=[1,2,3,4,5];
let a1=a.map(num=> num*2);
console.log(a1);


//filter()


let b=[10,20,30,40,50,60,70];
let b1=b.filter(num=> num>30);
console.log(b1);



//Reduce 

let c=[1,2,3,4,5];
let c1=c.reduce((total,num)=> total+num,0);
console.log(c1);


//forEach()



let d=[10,20,30,40,50,60,70,80,90,100];


d.forEach((value,index)=>{
    console.log(index,value);
    
});


// let text=document.getElementById("hed");
// let btn=document.getElementById("btn")

// btn.addEventListener("click",()=>{
//     btn.style.backgroundColor="red"
// text.innerHTML="Welcome to javaScript"
// })
   


//Callback 

e1(e)
function e(name){
    console.log("Hello"+name);
    
}

function e1(callback){
    callback("Thahir")

}

//Function Declaration and Function Exprassion



console.log(f(10,20));

function f(a,b){
    return a+b;
}

//Example for Expression


// console.log(f1(100,200));

// let f1=function (a,b){
//     return a+b;
// }


//IIFE 


(function g(name){
    console.log("Hello "+name);
    
})("Thahir")



// Lexical Enviorment and Scope 




let g=0;
function g1(){

    function g2(){
        g++
        console.log(g);
        
    }
    return g2;
}
let g3=g1();
g3()
g3()
g3()



//Currying

function h(a){

    return function (b){
        return a+b
    }
}
console.log(h(10)(20));


let h2= (a)=> (b)=> a+b
console.log(h2(5)(2));


function h3(text){
    return function(name){
        console.log(text+" "+name);
        
    }
}
let h4=h3("Hai");
h4("Ronaldo");
h4("Messi");
h4("Neymar");