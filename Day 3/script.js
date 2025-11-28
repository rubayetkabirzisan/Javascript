console.log("Var, let and const in JavaScript");
// const, let and var in javascript
// var is function scoped
// let and const are block scoped

// var example
console.log("Var in JavaScript");
var x = 5;
var y = 10;
console.log("Before reassignment:");
console.log("x:", x);
{
    var x = 15; // redeclaring and reassigning x

    console.log("Inside block:");
    console.log("x:", x);
}
console.log("Outside block:");
console.log("x:", x); // x is 15 here because var is function scoped
console.log("y:", y);


// let example
console.log("Let in JavaScript");
let a = 10;
let b = 20;
let c = null;
let d = undefined;

console.log("Before reassignment:");
console.log("a:", a);
{
    let b = 15;
    console.log("Inside block:");
    console.log("b:", b);
}
console.log("Outside block:");
console.log("b:", b);
console.log("c:", c);
console.log("d:", d);


// const example
console.log("Const in JavaScript");
const pi = 3.14;
console.log("Value of pi:", pi);
// pi = 3.14159; // This will throw an error
console.log("Constants cannot be reassigned.");

// Summary
console.log("Summary:");
console.log("1. 'var' is function scoped, while 'let' and 'const' are block scoped.");
console.log("2. Variables declared with 'let' can be reassigned, but not redeclared in the same scope.");
console.log("3. Variables declared with 'const' cannot be reassigned or redeclared.");


