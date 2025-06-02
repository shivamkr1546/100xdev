// let fName = "Shivam";
// let lName = "Kumar";
// console.log("Good Morning " + fName + " " + lName); // Concatenation

// let fName = "Shivam";
// let isMaried = false;

// if (isMaried == true) {
//     console.log(fName + " is married");
// }else {
//     console.log(fName + " is not married");
// }

// Q) Count the number of even numbers in an array
// let ans = 0;
// const arr = [0, 1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         ans ++;
//     }
// }
// console.log("Total even numbers in the array: " + ans);

// Q) Write a program to print the biggest number in an array
// let arr2 = [1, 2, 3, 4, 5];
// let max = arr2[0];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] > max) {
//         max = arr2[i];
//     }
// }
// console.log("Biggest number in the array: " + max);

//Q) Write a program that prints all the male people first name given a complex object
// const people = [
//     { firstName: "Shivam",
//       gender: "male"}
//     , { firstName: "Shivani",
//         gender: "female"}
//     , { firstName: "Shivendra",
//         gender: "male"
// }];

// for(let i = 0; i < people.length; i++) {
//     if (people[i]["gender"]=="male"){
//         console.log(people[i]["firstName"]);
//     }
// }

// Functions
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10)); // 15