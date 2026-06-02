//ARRAY SLICE ()


let a="Banana";
console.log(a.slice(2,5));


//ARRAY AT()

let b=[10,20,30,40];
console.log(b.at(2));


//Array to String()


let c=[10 , 20 , 30 , 40 ];
let c1=c.toString(c);
console.log(typeof(c1));


// Array Splice()

let d=[10,20,30,40,50];

let d1=d.splice(1,1,15)
console.log(d1);
console.log(d);


// Array join()
  


let e=["HTML" , "CSS" , "JavaScript" ];
 console.log(e.join("*"));
 



let e1=["HTML" , "CSS" , "JavaScript" ];
console.log(e1.join("**"));

 console.log(e1.join(""));
 

 //Array Pop()

 let f=[10,20,30,30,40];
 console.log(f.pop());
 console.log(f);
 console.log(f.length);
 


 // Delete()


 let g=[10,20,30];
 delete g[2];
 console.log(g);
 console.log(g.length);
 
 
 

 // Concat()


 let h=["Ronaldo","Messi"];
 let h1=["Neymer","Mbappe"];
 let h2=h.concat(h1);
 console.log(h2);





 // Unshift()




 let i=["Messi ","Neymar ","Joao Felix"];

i.unshift("ronaldo") ;
console.log(i);
 