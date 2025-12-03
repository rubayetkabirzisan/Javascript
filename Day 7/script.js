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

// switch case

let day = prompt("Enter a day number (0-6):");
day = Number.parseInt(day);
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
        break;
}

// Ternary Operator
let age = prompt("Enter your age:");
age = Number.parseInt(age);
let canVote = (age >= 18) ? "You can vote." : "You cannot vote.";
console.log(canVote);