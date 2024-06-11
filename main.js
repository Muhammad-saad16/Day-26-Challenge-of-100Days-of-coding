"use strict";
//      🚀 Day 26 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together,
// and returns the result. Show how you can call this function and log the result.
function addNumber(number1, number2) {
    return number1 + number2; // sum number 1 and 2
}
console.log(addNumber(2, 65)); // output is 67
// Question 77:
// Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello.
// If no name is given, it should greet an anonymous user.
function greet(name = "Anonymous") {
    console.log(`Hello ${name}!`);
}
greet("Muhammad Saad"); // output is Hello Muhammad Saad
greet(); // output is Hello Anonymous
// Question 78:
// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs
// the same task, such as squaring a number.
// Function declaration for squaring
function cubeDeclaration(number) {
    return number * number * number;
}
;
// Function expression for squaring a number
const cubeExpression = function (number) {
    return number * number * number;
};
console.log(cubeDeclaration(4)); // Outputs: 16
console.log(cubeExpression(4)); // Outputs: 16
// Both methods give us the same result, showing two different ways to create functions that do the same thing.
