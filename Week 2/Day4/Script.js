//  indexof() 

let a=[10,20,30,40,50];

console.log(a.indexOf(40));

console.log(a);


// lasIndexOf()


let b=[10,20,30,40,30,30,30,50];


console.log(b);

console.log(b.lastIndexOf(30));


//includes()


let c=["ronaldo","messi","neymar","mbappe","joa felix"];
console.log(c.includes("joa felix"));


//find()


let d=[9,21,33,4,50,6,7,8,9,];
let d1=d.find(num => num %2 ===0)
console.log(d1);



//findIndex()


let e=[10,20,30,40,50,60];
let e1=e.findIndex(value=> value<50 && value >30);
console.log(e1);



//Sort()


let f=["Apple","Orange","Mango"];
console.log(f.sort());


let f1=[100,25,5,40];
console.log(f1.sort((a,b)=> b-a));



//Reverse()


let g=["one ","two ","three","four"];
console.log(g.reverse());


//Sorting Object()


let h=[
    
        {name:"Ronaldo", club:"Hala Madrid" ,age:41},
        {name:"Messi",club:"Barcalona",age:38},
        {name:"Neymar",club:"Barcalona",age:36}
    
] 

let h1=h.sort((a,b)=> a.age - b.age);
console.log(h1);


let h2=h.sort((a,b)=> a.name.localeCompare(b.name));
console.log(h2);


let users = [
  { name: "Tom", age: 22 },
  { name: "Ali", age: 20 }
];

let k= users.sort((a, b) => a.age - b.age);
console.log(k);



let k2=[100,2,500,25,38,60];

console.log(k2.sort((a,b)=> a-b));




// Random Sort



let l=[10,20,30,40,50];
console.log(l.sort(()=> Math.random() -0.4));

