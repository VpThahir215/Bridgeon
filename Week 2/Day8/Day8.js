function text(a){
let b=a.split(" ")
console.log(b.reverse().join(" "));



}
text("i love js");


function indu(a){
let b=a.split(" ")
let c=b.map(b => 
    b.split("").reverse().join("")
);
console.log(c.join(" "));








}

indu("i love js")

const freq=new Map();

const te=["apple","banana","apple"]
for(const ind of te){
    if(freq.has(ind)){
       freq.set(ind,freq.get(ind)+1)
    }else{
        freq.set(ind,1)
    }
}
console.log(freq);


