// ******************************* All Resources
// HTML DOM
// https://www.w3schools.com/js/js_htmldom.asp

// JavaScript Best Practices
// http://w3schools.com/js/js_best_practices.asp

// JS Functions
// https://www.geeksforgeeks.org/different-ways-of-writing-functions-in-javascipt/
// https://www.geeksforgeeks.org/difference-between-function-declaration-and-function-expression-in-javascript/

// JavaScript Arrow Function
// https://www.w3schools.com/js/js_arrow_function.asp
// *******************************


// Function declaration 
function add(a, b) {
    console.log(a + b);
}
// Calling a function
add(2, 4);


// Function Expression
const add2 = function (a, b) {
    console.log(a + b);
}
// Calling function
add2(2, 3);


// arrow function
const add3 = (a, b) => {
    console.log("inside arrow");
    return a + b;
}

console.log(add3(6, 9));



// How this Works in Regular Functions
// In a regular function, the value of this depends on how the function is called.
const user = {
    name: "Alice",
    greet: function () {
      console.log(`Hello, ${this.name}`);
    },
  };
  
  user1.greet(); // ✅ Hello, Alice
//   ✅ Here, this refers to user because greet() is called as a method of user.

// Arrow functions do not have their own this. Instead, they inherit this from the surrounding scope (lexical scoping).

const user2 = {
    name: "Alice",
    greet: () => {
      console.log(`Hello, ${this.name}`);
    },
  };
  
  user2.greet(); // ❌ Hello, undefined
// ❌ this.name is undefined because arrow functions do not bind their own this.



// Arrow Functions in Methods
// If you use an arrow function inside a method, it inherits this from the surrounding function.
const user3 = {
    name: "Alice",
    greet: function () {
      const inner = () => {
        console.log(`Hello, ${this.name}`);
      };
      inner();
    },
  };
  
  user3.greet(); // ✅ Hello, Alice

  
//    Arrow Functions in Event Listeners
// When using this in event listeners, arrow functions inherit this from the surrounding scope, while regular functions refer to the element itself.

const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this); // ✅ Refers to the button element
});

button.addEventListener("click", () => {
  console.log(this); // ❌ Refers to the global `window` object (not the button)
});

// When to Use Arrow Functions?
// ✔ Good for:
// ✅ When you need this to refer to the surrounding scope (e.g., inside object methods, event handlers, callbacks).

// ❌ Avoid in:
// ❌ Object methods (unless nested inside a normal function).
// ❌ Event listeners if you need this to refer to the element.
  