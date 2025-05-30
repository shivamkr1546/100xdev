"use strict"; //treat all JS code as newer version

// alert(3+3) // we are using nodejs, not browser

let fname = 'shivam kumar'; // String
let age = 22; // Number
let isLoggedIn = false; // Boolean
let state; // Undefined
let nullVariable = null; // Null
let bigIntVariable = 1234567890123456789012345678901234567890n; // BigInt
let symbolVariable = Symbol('unique'); // Symbol
let objectVariable = {
    name: 'shivam',
    age: 22,
    isLoggedIn: false
}; // Object
let arrayVariable = [1, 2, 3, 4, 5]; // Array (which is a type of object)

console.log(typeof fname) // string
console.log(typeof age) // number
console.log(typeof isLoggedIn) // boolean
console.log(typeof state) // undefined
console.log(typeof nullVariable) // object (this is a known bug in JavaScript)
console.log(typeof bigIntVariable) // bigint
console.log(typeof symbolVariable) // symbol
console.log(typeof objectVariable) // object
console.log(typeof arrayVariable) // object (arrays are also objects in JavaScript)