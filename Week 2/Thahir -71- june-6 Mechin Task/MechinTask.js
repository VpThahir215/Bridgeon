//Question 1

function toArray(a){
console.log(Object.entries(a));


}
toArray({a:1,b:2})


//Question 3

function replaceSpace(a){
let b=a.split(" ")
console.log(b.join("+"));

}
replaceSpace("i love JS")


//Question 2

function moveCapital(a){
    let cap="";
    let low=""
for(let chr of a){
if (chr >= "A" & chr <= "Z"){
    cap+=chr
}else{
    low+=chr
}
}
    console.log(cap);
    console.log(low);
    console.log(low.concat(cap));
    
    
}





moveCapital("PyTHon")


//Question 

// function multiplicationTable(a){
// let b=a.map(num=> num *2);
// console.log(b);

// }
// multiplicationTable(3)