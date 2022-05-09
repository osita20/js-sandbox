// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

let checkincludes = dragons.includes('john');

console.log('The answer is  ' + checkincludes);


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragon = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let name = 'John';
let verify = dragon.filter(user => user.includes(name));

console.log('Checking  ' + verify);

// #3) Create a function that calculates the power of 100 of a number entered as a parameter

const power =(x) => x**100;
console.log(power(2));
// #4) Using your function from #3, put in the parameter 10000. What is the result?
const power1 =(x) => x**100;
console.log(power(10000));
// Research for yourself why you get this result

function checkNumber(largeNumber) {
   if (largeNumber === Number.POSITIVE_INFINITY) {
     return 'Process number as Infinity';
   }
   return largeNumber;
 }
 
 console.log(checkNumber(Number.MAX_VALUE));
 // expected output: 1.7976931348623157e+308
 
 console.log(checkNumber(Number.MAX_VALUE * 2));
 // expected output: Process number as Infinity
