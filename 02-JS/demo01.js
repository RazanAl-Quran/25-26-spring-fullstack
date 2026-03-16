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
// let {firstName:firstName2,lastName:lastName2,age:age2} = person; 
// or
// let {firstName:firstName,lastName:lastName,age:age} = person; 
// and for shorthand do the below
let {firstName,lastName,age} = person; 


// using const with numbers so the data type and the value can NOT be changed
const num9 = 9;
// num9=10;// xxxxx

// using const with array and object so the data type(not the value) can NOT be changed
const arr3 = [3,6,9];
arr3.push(7);
arr3[0]="abdelrahman";
// arr3 = 9; // error
console.log(arr3);


// pass by value
let num1 = 9;
let num2 = num1;
num1 = 20
console.log(num1); // 20
console.log(num2); // 9


// pass by reference
let arr11 = [1, 2, 3];
// let arr22 = arr11;
arr22 = [...arr1];
arr11.push(4);
console.log(arr11); //[1, 2, 3,4]
console.log(arr22);//[1, 2, 3]




// ES6 Spread Operator
// https://www.w3schools.com/react/react_es6_spread.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_rest
// rest allows us to pass an indefinite number of arguments to a function

// Why Do We Need the Spread Operator (...) in JavaScript?
// The spread operator (...) is a powerful feature in JavaScript that allows us to expand elements of an array or object. It makes working with arrays and objects more efficient and readable.

// 1. Copying Arrays & Objects (Avoiding Mutations)
// Instead of modifying an existing array or object, we can create a copy using the spread operator
// a. Copying an Array
const arr1 = [1, 2, 3];
// const arr2 = arr1;
const arr2 = [...arr1];  // Creates a new array (not a reference)
arr2.push(4);

console.log(arr1); // [1, 2, 3]  (Original remains unchanged)
console.log(arr2); // [1, 2, 3, 4]

// b. Copying an Object
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1 }; // Creates a new object

obj2.age = 30;

console.log(obj1); // { name: "Alice", age: 25 }
console.log(obj2); // { name: "Alice", age: 30 }



// 2. Merging Arrays & Objects
const arr111 = [1, 2, 3];
const arr222 = [4, 5, 6];

const mergedArr = [...arr111, ...arr222];
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

const user = { name: "John", age: 30 };
const details = { country: "USA", gender: "Male" };

const mergedUser = { ...user, ...details };
console.log(mergedUser); // { name: "John", age: 30, country: "USA", gender: "Male" }


// 3. Adding Elements to Arrays Easily
// Instead of using .concat(), we can use the spread operator.
const arr = [1, 2, 3];
const newArr = [0, ...arr, 4];
console.log(newArr); // [0, 1, 2, 3, 4]


// 4. Converting Strings to Arrays
const str = "Hello";
const charArray = [...str];
console.log(charArray); // ['H', 'e', 'l', 'l', 'o']






