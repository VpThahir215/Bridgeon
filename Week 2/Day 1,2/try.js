let person={
    name:"thahir",
    cityy:"malappuram"
}


for(let key in person){
    console.log(key+": "+person[key]);
    
}

let arr=[10,20,30,40];
for(let value in arr){
    console.log(value);
    
}

// SLICE

let text="JAVA SCRIPT";

let result=text.slice(0,4);
console.log(result);
console.log(text);



//SUBSTRING


let tex="JAVA SCRIPT";

let resul=text.substring(0,4);
console.log(resul);
console.log(tex);


//TO UPPER CASE


let name="Thahir";
let re= name.toUpperCase()
console.log(re);




//TO LOWER CASE


let na="THAHIR";
console.log(na.toLowerCase());



//CONCAT

let player1="Cristiano Ronaldo";
let player2=" Joao Felix";
let players=player1.concat(player2);
console.log(players);


// REPLACE


 let goat=" Ronaldo Messi ";
 let edit=goat.replace("Messi","Mbape");
 console.log(edit);
 console.log(goat);
 
 
// REPLACE VS REPLACE ALL


 let goa=" Ronaldo Ronaldo Ronaldo ";
 let edi=goa.replace("Ronaldo","Mbape");
 console.log(edi);
 console.log(goa);
 

 let go=" Ronaldo Ronaldo Ronaldo ";
 let ed=go.replaceAll("Ronaldo","Mbape");
 console.log(ed);
 console.log(go);

 //PAD START()



 let a=9;
 console.log(String(a).padStart(4,"*"));
 
 

 //INDEX OF()
//if not found the out put will be -1

 let b="Thahir Vp";
 console.log(b.indexOf("v"));
 



 let ab="Thahir Vp Vadakkum Parambil";
 console.log(ab.indexOf("V"));
 


 //INCLUDES()


 let d=[100,200,300,400,500];
 console.log(d.includes(300));
 

 //Search()


 let e="Thahir Vp Kodinhi"

console.log(e.search("Kodinhi"));


// MATCH()



let f="abc123xyz";
console.log(f.match(/[0-9]/));



let g="2025-05";
let res = g.match(/(?<year>\d{4})-(?<month>\d{2})/);
console.log(res.groups);



let h='The rain in SPAIN stay mainly in the plain';
console.log(h.match(/ain/));



//GLOBEL


let h1="The rain in SPAIn stay mainly in the plain";
console.log(h1.match(/ain/g))




// A global, case-insensitive search

let h2="The rain in SPAIN stay mainly in the plain";
console.log(h2.match(/ain/gi))



//STARTS WITH ()


let i="vpthahir3062003@gmail.com";
let r=i.startsWith("vpthahir3062003");
console.log(r);


//ENDS WITH ()


let i1="vpthahir3062003@gmail.com";
let r1=i1.endsWith("mail");
console.log(r1);



// TEMPALATE LITEREALS 
//*Multipple line
let j=`thahir 
kodinhi`;
console.log(`hello ${j}
    vp`);
