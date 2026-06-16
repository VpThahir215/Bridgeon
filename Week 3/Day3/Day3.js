// Shallow Copy



let user={
    name:"Ronaldo",
    Personel:{
        nation:"Portugal"
    }
}
let copy={...user}
copy.Personel.nation="Argentina";
console.log(user.Personel.nation);



// Deep Copy


let userr={
    name:"Ronaldo",
    Personel:{
        nation:"Portugal"
    }
}
let copyy=structuredClone(userr)
copy.Personel.nation="Argentina";
console.log(userr.Personel.nation);


// Weak set()

let a=new Set()

a.add(10);
a.add(20);
a.add(10);
console.log(a);
console.log({name:"Thahir"});


let b=new WeakSet ();
b.add({place:"Kodinhi"})
console.log(b);


let k=[1,2,2,3,4,2,3,3]
let c=new Set(k);
console.log(c);



const map = new WeakMap();
let us={}


map.set(us,"Rono");
console.log(map.get(us));



//  Optional Chaining (?.)



let e={
    name:"Ronaldo"
}

console.log(e.place?.citty);



// Nullish coalescing


let f=null;
let f1=f??"thahir";
console.log(f1);







