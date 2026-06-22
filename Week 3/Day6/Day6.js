//Rest Parameter


function fun(...a){
 
    let total=0;

    for(let num of a){
        total += num
    }

return total
}
console.log(fun(1,2,3,4,));
console.log(fun(10,20,30,40,50));

let player={
    name:"Ronaldo",
    club:"Al nasr"

}
let updatePlayer={
    ...player
}
console.log(updatePlayer);



// Destructuring 


let a=[10,20,30,40,50,60,70,80,90,100];
let [first,second,third]=a;
console.log(first,third);

let a1={
    name: "Ronaldo",
    club:"Al nasr",
    nationality:"Portugal"
}
let {name,nationality}=a1;
console.log(nationality+"\n"+name);



// this Keyword


let b={
    name:"Ronaldo",
    club:"Al nasr",
    call(){
        console.log(this.name);
        
    }
}

let b1={
    name:"Joao Felix",
    club:"Al nasr",
    call1(){
        console.log(this.name);
    
    }
}
b1.call1()




//  Call methods

function c(citty,country){

    console.log(`Hy i am ${this.name} from ${citty}, ${country} `);
    
}
let nam={
    name:"Thahr"
}
c.apply(nam,["Malappuram","India"])



//recursion


function d(num){

    if(num===1){
        return 1;
    }
    return num+ d(num -1);
}
console.log(d(5));

console.log("-------------------------------------");

function test(n) {
    if (n === 0) {
        return;
    }

    console.log(n);
    test(n - 1);
    console.log(n);
}

test(3);


console.log("-------------------------------------");
function d1 (num){
    console.log(num);
     
    if(num===1){
        return;
    }
      
    d1(num -1)
}
d1(6)
