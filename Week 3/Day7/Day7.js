//Maps and set


const map=new Map()

map.set("name","Ronaldo");
map.set("Club","Hala Madrid");
map.set("national","Portugal");

console.log(map.get("name"));
console.log(map.get("Club"));
console.log(map.get("national"));
console.log(map);





const numbers=new Set()


numbers.add(10);
numbers.add(20);
numbers.add(10);
console.log(numbers);


//Problem 1: Find Duplicate Numbers (Set)


// Input
// const arr = [1, 2, 3, 2, 4, 5, 3];
// Output
// [2, 3]
// Hint

// Use a Set to keep track of numbers you've already seen.

// const seen = new Set();
// const duplicates = [];

const arr=[1,2,3,2,4,5,3];

const seen=new Set();
const duplicates=new Set();

for(const num of arr){
    if(seen.has(num)){
        duplicates.add(num);
    }else{
        seen.add(num);
    }
} 
console.log(...duplicates);





// Count Character Frequency (Map)
// Input
// const str = "banana";
// Output
// Map(3) {
//   'b' => 1,
//   'a' => 3,
//   'n' => 2
// }
// Hint

// Use a Map where:

// key = character
// value = count
// const freq = new Map();

const freq=new Map();

const text="banana";
for(const chr of text){
    if(freq.has(chr)){
       freq.set(chr,freq.get(chr)+1)
    }else{
        freq.set(chr,1)
    }
}
console.log(...freq);
