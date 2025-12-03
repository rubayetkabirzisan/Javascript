// Javascript Operators and Expressions
console.log("Operators in JavaScript:");

let a = 45;
let b = 4;

// Arithmetic Operators

console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation

console.log("++a =", ++a); // Increment
console.log("a after ++a =", a); // Value after increment
console.log("a++ =", a++); // Increment
console.log("a after a++ =", a); // Value after increment

console.log("--b =", --b); // Decrement
console.log("b after --b =", b); // Value after decrement
console.log("b-- =", b--); // Decrement
console.log("b after b-- =", b); // Value after decrement

 
// Comparison Operators

console.log("a == b:", a == b); // Equal to
console.log("a != b:", a != b); // Not equal to
console.log("a === b:", a === b); // Strict equal to
console.log("a !== b:", a !== b); // Strict not equal to
console.log("a > b:", a > b); // Greater than
console.log("a < b:", a < b); // Less than
console.log("a >= b:", a >= b); // Greater than or equal to
console.log("a <= b:", a <= b); // Less than or equal to

// Logical Operators
let x = true;
let y = false; 
console.log("x && y:", x && y); // Logical AND
console.log("x || y:", x || y); // Logical OR
console.log("!x:", !x); // Logical NOT

// Assignment Operators
let c = 10;
c += 5; // c = c + 5
console.log("c after c += 5:", c);
c -= 3;
console.log("c after c -= 3:", c);
c *= 2;
console.log("c after c *= 2:", c);

// bitwise Operators
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary
console.log("m & n:", m & n); // Bitwise AND
console.log("m | n:", m | n); // Bitwise OR
console.log("m ^ n:", m ^ n); // Bitwise XOR
console.log("~m:", ~m); // Bitwise NOT
console.log("m << 1:", m << 1); // Left shift
console.log("m >> 1:", m >> 1); // Right shift
console.log("m >>> 1:", m >>> 1); // Unsigned right shift
