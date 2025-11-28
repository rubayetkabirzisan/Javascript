// JavaScript Chapter 1 - Practice Set

// Question 1
// Create a variable of the string  and try to add a number to it

let a = "Hello";
let b = 5;
let result = a + b; // "Hello5"
console.log(result); // Output: Hello5


// Question 2
// Use typeof operator to find the data type of the string in last question
console.log(typeof result); // Output: string

// Question 3
// create a const object in javascript.can you change it to hold a number later?
const myObject = { name: "John", age: 30 };
// myObject = 5; // This will throw an error: Assignment to constant variable.
console.log(myObject); // Output: { name: "John", age: 30 }

// Question 4
// Try to add a new key to const object in javascript.
myObject.city = "New York"; // This is allowed
console.log(myObject); // Output: { name: "John", age: 30, city: "New York" }

// Question 5
// write a js program to create a word meaning dictionary of 5 words
const dictionary = {
    "JavaScript": "A high-level, dynamic, untyped, and interpreted programming language.",
    "Function": "A block of code designed to perform a particular task.",
    "Variable": "A named storage for data.",
    "Object": "A collection of properties, where each property is defined as a key-value pair.",
    "Array": "An ordered collection of items, which can be of different types."
};
console.log(dictionary);