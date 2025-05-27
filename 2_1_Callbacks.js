// Function to calculate the square of a number
function square(n) {
    console.log("Square Called");
    return n * n;
}

// Function to calculate the cube of a number
function cube(n) {
    console.log("Cube Called");
    return n * n * n;
}

// Function to calculate the fourth power (quad) of a number
function quad(n) {
    console.log("Quad Called");
    return n * n * n * n;
}

// Function to sum two numbers (previously designed to accept a callback function)
function sumOfSomething(a, b) {
    return a + b;
}

// Calling sumOfSomething function with square function results
// square(1) → returns 1 (prints "Square Called")
// square(2) → returns 4 (prints "Square Called")
// sumOfSomething(1, 4) → returns 5

let ans = sumOfSomething(square(1), square(2));
console.log(ans); // Output: 5