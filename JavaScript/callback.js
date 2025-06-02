// // Callbacks are functions that are passed as arguments to other functions.
// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("The result is: " + data);
// }

// function displayResultPassive(data) {
//     console.log("The result is: " + data);
// }

// //You are only allowed to call one function after this
// //How will you displayResult of a sum

// const ans = sum(5, 10, displayResult);
// // const ans = sum(5, 10, displayResultPassive);


// in this there is no callback
// function calculateArithmetic(num1, num2, type){
//     if(type == "sum"){
//         const value = sum(a,b);
//         return value;
//     }
//     if(type == "sub"){
//         const value = sub(a,b);
//         return value;
//     }
// }

// function sum(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// const value = calculateArithmetic(5, 10, "sum");

// Callback in below example
function calculateArithmetic(num1, num2, fnToCall){
    const ans = fnToCall(num1, num2); // Call the callback function with num1 and num2
    return ans;
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

const value = calculateArithmetic(5, 10, sum);
console.log(value); // 15
