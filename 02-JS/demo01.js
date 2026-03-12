// Resources
// All References
// https://www.w3schools.com/js/js_es6.asp
// https://www.w3schools.com/js/js_let.asp
// https://www.w3schools.com/js/js_const.asp
// https://www.w3schools.com/js/js_datatypes.asp
// https://www.w3schools.com/js/js_typeof.asp
// https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/
// https://www.w3schools.com/js/js_hoisting.asp
// https://www.w3schools.com/js/js_destructuring.asp
// https://www.w3schools.com/react/react_es6_spread.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_rest
// https://www.w3schools.com/js/js_best_practices.asp

// What is JS ??
// JS is event-driven, sync/async, single-threaded scripting language

// attached slides

console.log('hello thereeee!!');

// Javascript ES6
// https://www.w3schools.com/js/js_es6.asp

// https://www.w3schools.com/js/js_variables.asp

// var,let,const
// https://www.w3schools.com/js/js_let.asp


var x1 = 5;
let x2 = 8;
const x3 = 9;

// When to Use var, let, or const?
// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

{
    let x4 = 2;
}
// x can NOT be used here
// console.log(x4);

{
    var x5 = 2;
}
// x CAN be used here
// console.log(x5);

// carName = "Volvo";
// let carName;
carName2 = "Volvo";
var carName2;


// JavaScript Data Types
// non-primitive: Object/Array
// https://www.w3schools.com/js/js_datatypes.asp
// https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/


// Hoisting
// Hoisting is JavaScript's default behavior of moving declarations to the top.
// JavaScript only hoists declarations, not initializations.
// https://www.w3schools.com/js/js_hoisting.asp


// JavaScript Destructuring
// https://www.w3schools.com/js/js_destructuring.asp
// The destructuring assignment syntax unpack object properties into variables
// It can also unpack arrays and any other iterables
// Object Destructuring
// String Destructuring
// Array Destructuring

// let {lastName, firstName} = person;
// let firstName2 = person.firstName;
// let lastName2 = person.lastName;



// var x
// function xyz(){
    // return 5;
// }
{
    console.log(x); //10
    var x = 9;
    x = 10;

}
console.log(x); //10


{

    let x2 = 10;
    x2 = 12;
    console.log(x2); //12
}

// console.log(x2); //12


const x4 = 12;
// x3=14;
console.log(x4);

console.log(xyz());

function xyz(){
    return 5;
}



const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// let firstName = person.firstName;
// let lastName = person.lastName;
// let age = person.age;

// JS Destructuring
let {firstName,lastName,age} = person; 

