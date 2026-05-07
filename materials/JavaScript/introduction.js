/* ---------------------------------
    1. Variables
   --------------------------------- */

let a;
console.log("The value of a is " + a); // The value of a is undefined

const b = "Samwise";
console.log("The value of b is " + b); // The value of b is Samwise

let b = "Frodo"; // SyntaxError: Identifier 'b' has already been declared
console.log("The value of c is " + b); 

// console.log('The value of c is ' + c); // ReferenceError: c is not defined

/* ---------------------------------
    2. Variable Types
   --------------------------------- */

/* Number */
// let myNumber = 9;

/* String */
// let myString = 'Boil em, mash em, stick em in a stew.';

/* Boolean */
// let myBoolean = true;

/* Indexed array */
// let myArray = ['Lord', 'of', 'the', 'Rings', 'is', 'awesome'];

/* Associative array */
// let myObject = {
//     Movie1: {
//         Title: 'Lord of the Rings',
//         Rating: 'Awesome'
//     },
//     Movie2: {
//         Title: 'Leon',
//         Rating: 'Amazing'
//     },
//     Movie3: {
//         Title: 'Nightmare before Christmas',
//         Rating: 'I love it'
//     }
// }

/* ---------------------------------
    3. Operators
   --------------------------------- */

/* Arithmetic operators */
// console.log(5 * 5) // 25;

/* Assignment operators */
// let y = 15;
// console.log(y) // 15;
// y = 10;
// console.log(y) // 10;
// y += 10;
// console.log(y) // 20;

/* Comparison operators */
// console.log(y === 20) // true;
// console.log(y !== 20) // false;
// console.log(y >= 20) // true;

/* ---------------------------------
    4. Conditional Statements
   --------------------------------- */

// let z = 20;

// if (z === 10) {
//     console.log('z equals 10 - it stores the value of ' + z);
// } else {
//     console.log('z does not equal 10 - it stores the value of ' + z);
//     if (z > 50) {
//         console.log('z is larger 50');
//     } else {
//         console.log('z is smaller or equal 50');
//     }
// }
// z does not equal 10 - it stores the value of 20
// z is larger 50

/* ---------------------------------
    5. Loops
   --------------------------------- */

/* While */
// let x = 1;
// while (x <= 1000) {
//     console.log(x); // 1...1000
//     x = x + 1;
// }

/* For */
// for (let i = 1; i <= 100; i++) {
//     console.log(i); // 1, 2, 3, 4, 5, ...
// }

/* For in */
// let friends = {
//     A: 'Samwise',
//     B: 'Frodo',
//     C: 'Gimli'
// };
// for (let names in friends) {
//     console.log(names); // A, B, C
//     console.log(friends[names]); // Samwise, Frodo, Gimli
// }

/* ---------------------------------
    6. Functions
   --------------------------------- */

// function myFunction(var1, var2) {
//     console.log(var1 + ' is stronger than ' + var2);
// }
// myFunction('Samwise', 'Aragorn'); // Samwise is stronger than Aragorn

/* ---------------------------------
    7. DOM Manipulation
   --------------------------------- */

/* Create HTML elements */
// let link = document.createElement('a');
// link.textContent = 'Ardapedia';
// link.href = 'https://www.ardapedia.org/wiki/Hauptseite';

/* Select and add HTML elements */
// document.querySelector('.result').appendChild(link);

/* Change style attributes */
// link.style.color = 'red';
