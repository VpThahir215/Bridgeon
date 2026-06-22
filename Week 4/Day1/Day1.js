

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.




var isPalindrome = function(s) {
   let m= s.toLowerCase().replace(/[^a-zA-Z0-9]/gi,"")
let arr=[];
for(let i=m.length;i>=0;i--){
    arr.push(m[i])
}
let n=arr.toString().replaceAll(",","");
console.log(m);
console.log(n);


if(m===n){
    return true
}else{
    return false
}

};
console.log(
isPalindrome("race a car"));



// Stack Overflow


// function greet() {
//     greet();
// }

// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();
console.log("---------------------------------");


let stack = [];

function popItem() {
    if (stack.length === 0) {
        console.log("Stack Underflow!");
        return;
    }

}

popItem();


let a=[];
console.log(a.pop());
