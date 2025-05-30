let score = "33"

// console.log(typeof score); //string
// console.log(typeof(score)); //string

let valInNumber = Number(score)
// console.log(typeof valInNumber) //number

// console.log(valInNumber) //33

let score1 = "33abc"

// console.log(typeof score); // string
// console.log(typeof(score)); // string

let valInNumber1 = Number(score1) // Converts the string to a number, but since the string is not a valid number, it will return NaN (Not a Number)
// console.log(typeof valInNumber1) // number

// console.log(valInNumber1) // NaN

// NaN is a special value in JavaScript that represents a value that is not a valid number

// **************************************** Operations ******************************************

let val = 30
let negVal = -val
// console.log(negVal) // -30

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 / 2)
// console.log(2 % 2) // Modulus operator, returns the remainder of the division
// console.log(2 ** 3) // Exponentiation operator, returns 2 raised to the power of 3

let str1 = "shivam"
let str2 = "kumar"
let str3 = str1 + " " + str2 // Concatenation of strings
// console.log(str3) // shivam kumar

// console.log("1" + 2)
// consoel.log(1 + "2") // String concatenation, results in "12"
// console.log(1 + 2 + "3") // 33, because 1 + 2 is evaluated first, resulting in 3, and then "3" is concatenated

// console.log(true + true) // 2, because true is converted to 1 and false is converted to 0
// console.log(true + false) // 1, because true is converted to 1 and false is converted to 0
// console.log(+"") // 0, because an empty string is converted to 0
// console.log(+true) // 1, because true is converted to 1

let num1, num2, num3

num1 = num2 = num3 = 2+2 // Chained assignment, all variables will have the value 4

let v = 4
// console.log(v++) // 4, post-increment operator, returns the value before incrementing
// console.log(++v) // 6 , pre-increment operator, returns the value after incrementing

//=== strict equality operator, checks both value and type
console.log(2 === 2) // true, both value and type are the same
console.log(2 === "2") // false, value is the same but type is different