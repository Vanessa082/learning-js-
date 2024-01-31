

// this code works the modern way

// const popup = 
//     alert ('hello world')

//     let message = "This";

// // repeated 'let' leads to an error
// let message = "That"; // SyntaxError: 'message' has already been declared

// importance: 2
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

// let admin, name; // can declare two variables at once

// name = "John";

// admin = name;

// alert( admin );

// importance: 3
// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

// const planetName = "Earth"
// const currentVisitor = "wah van"

// const birthday = '18.04.1982';

// const age = someCode(birthday);

// alert( 1 / 0 );

// alert( NaN ** 0 )

// alert( `Hello, ${name}!` );

// alert( `the result is ${1 + 2}` ); 


// importance: 5
// What is the output of the script?

// let name = "Ilya";

// alert( `hello ${1}` ); // ?

// alert( `hello ${"name"}` ); // ?

// alert( `hello ${name}` ); // 

// let age = prompt('How old are you?');

// alert(`You are ${age} years old!`); 

// confirm synthax

// let isBoss = confirm("Are you the boss?");

// alert( isBoss );
// task
// let quesTion = prompt("what is your name");
// alert(quesTion);

// Basic operators, maths


// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
// console.log("Your number is the square root of " +
// theNumber * theNumber);
// }

// the result of 2 to the power 10

// let result = 1;
// let count = 0;
// while(count < 10){
// result = result * 2;
// count = count + 1
// }

// 
// let result = 1;
// for(let i = 0; i < 10; i++){
// result = result * 2
// }

// console.log(result)

// for (let i = 20;  i = i ; i++) {
//     if (i % 7 == 0) {
//     console.log(i);
//     break;
//     }
//     }
//     // →

//   Write a loop that makes seven calls to console.log to output the following triangle:

// let triangle = "";
// for (let i = 0; i < 7; i++) {
//     triangle += "#"
//     console.log(triangle)
// }

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1
// to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
// instead of the number, and for numbers divisible by 5 (and not 3), print
// "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz
// " for numbers that are divisible by both 3 and 5 (and still print "Fizz"
// or "Buzz" for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed
// out a significant percentage of programmer candidates. So if you solved
// it, your labor market value just went up.)

// for (let i = 1; i <= 100; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

