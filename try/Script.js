// var addTwoNumbers = function(l1, l2) {
  
//     let a=l1.reverse()
//     let b=String(a).replaceAll(",","")
  
//   console.log(b);
  
   
// }
// addTwoNumbers([1,2,3],[321])


var addTwoNumbers = function(l1, l2) {
let Rev=l1.reverse()
let Rep=String(Rev)
console.log(Rep)
};
console.log(addTwoNumbers([2,4,3],[5,6,4]))

function replaceSpaces(a){
let b= a.replaceAll(" ","-");
console.log(b);

}

replaceSpaces("i love JS")


function secondSmallest(a){
    let vall=a[0]
    let smallest=[]
   
    for (val of a){
       if(vall<=val){
        smallest.push(val)
       }else{
        vall=val
       }
        
    }
    let fill=a.filter(v=> v !==vall);
    console.log(fill);

      let vall2=fill[0]
    let smallest2=[]
    
     for (val of fill){
       if(vall2<=val){
        smallest.push(val)
       }else{
        vall2=val
       }
        
    }

console.log(vall2);


}
secondSmallest([25,143,89,50,13]);


function evenKeys(a){
    let aaa=[]
for(let key in a){
 if(a[key]%2===0){
    aaa.push(key)
 }
    
}


console.log(aaa);


}

evenKeys({j:12,k:13,z:100})