// Primitives and Objects in JavaScript
// There are 7 primitive data types in JavaScript:
// 1. null
// 2. number
// 3. symbol
// 4. string
// 5. boolean
// 6. bigint
// 7. undefined
// Everything else is an object.
// Primitives are immutable, meaning their values cannot be changed.
// Objects are mutable, meaning their properties can be changed.

let a = null; // null
let b = 42; // number
let c = true; // boolean
let d = BigInt("565") + BigInt("5"); // bigint
let e = "Hello, World!"; // string
let f = Symbol("id"); // symbol
let g = undefined; // undefined

console.log("a:", a, "Type:", typeof a);
console.log("b:", b, "Type:", typeof b);
console.log("c:", c, "Type:", typeof c);
console.log("d:", d, "Type:", typeof d);
console.log("e:", e, "Type:", typeof e);
console.log("f:", f, "Type:", typeof f);
console.log("g:", g, "Type:", typeof g);

// Example of an object
let person = {
    name: "Alice",
    age: 30
};
console.log("person:", person, "Type:", typeof person);

