// Conditional Statements in JavaScript
const prompt = require("prompt-sync")();

let a = prompt("Enter the first number (a):");
console.log(typeof a); // By default, prompt returns a string

let b = prompt("Enter the second number (b):");
console.log(typeof b); // By default, prompt returns a string

// Convert the input strings to numbers
a = Number.parseInt(a);
b = Number.parseInt(b);
console.log(typeof a); // Now a is a number
console.log(typeof b); // Now b is a number

if (a > b) {
    console.log("a is greater than b");
}
else if (a < b) {
    console.log("a is less than b");
}
else {
    console.log("a is equal to b");
}