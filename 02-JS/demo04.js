// Async Behaviour in JS can be handled in 3 ways
// 1- callbacks
// 2- promises
// 3- async/await

// Resources
// https://developer.okta.com/blog/2019/01/16/history-and-future-of-async-javascript
// https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/
// http://callbackhell.com/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ


// 1- CALLBACKS
// A callback is a function passed as an argument to another function and executed later.

// ************ callbacks example 1
function calculateSquare(number, callback) {
    console.log('inside calculateSquare');
    let result = number * number;
    callback(result);
}

function displayResult(result) {
    console.log("The square is:", result);
}
// Calling the function with a callback
calculateSquare(5, displayResult);


// ************ callbacks example 2
console.log('hi 1');
function cb() {
    console.log('hi 2');
}
setTimeout(cb, 3000);
console.log('hi 3');



// ************ callbacks example 3
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 done");
        callback();
    }, 3000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 done");
        callback();
    }, 2000);
}

function step3() {
    setTimeout(() => {
        console.log("Step 3 done");
    }, 1000);
}

// step1(() => {
//     step2(() => {
//         step3();
//     });
// });

// step1(step2(step3))

// step1();
// step2();
// step3();




// *************************************************
// 2- PROMISES
// A Promise is an object that represents a value that may be available now, in the future, or never.


// ***************** What is fetch:
// It's a built-in promised-based JavaScript function that lets you request data from a server, such as: JSON APIs, Files, and Web pages
// Introduced in ES6, fetch() replaces the older XMLHttpRequest method with a simpler and cleaner syntax.
// The fetch() method returns a Promise, which resolves to a Response object.


// ***************** What is 3rd party API and how to read their documentation
// A third-party API is an API (Application Programming Interface) that is built and maintained by someone else, usually a company or organization, and you can use it in your own applications to access specific data or services
// 🧠 In Simple Terms:
// It's like borrowing functionality from another website or service instead of building it yourself.

// 🧱 Why Use a Third-Party API?
// 1- Save time and effort
// 2- Get reliable data or services
// 3- Add powerful features without coding them yourself

// 🔐 Some APIs Require Keys
// Popular or sensitive APIs often require an API key

// No API Key is required >>> digimon API >> https://digimon-api.vercel.app/



// ************* Promises example 
// let result = fetch("https://digimon-api.vercel.app/api/digimon")
// console.log(result);

console.log('before');

fetch("https://digimon-api.vercel.app/api/digimon")
    .then((result) => {
        // let result2 = result.json();
        // console.log(result2);
        return result.json();
    })
    .then((result2)=>{
        console.log(result2);
        
    }).catch(error=>{
        console.log('error happened');
        
    })
console.log('after');


// Promises chaining
// we use when you're chaining asynchronous operations.
// fetch(...)
//   .then(...)  // 1st Promise
//   .then(...)  // 2nd Promise, using result from 1st
//   .then(...)  // 3rd Promise, using result from 2nd
//   .catch(...) // handles errors in any of the above




// *************************************************
// 3- Async/Await
// Introduced in ES8, async/await makes handling asynchronous code more readable, like synchronous code.

console.log('before fetchDigimonNames');
async function fetchDigimonNames() {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        const data = await response.json();
        const names = data.map(digimon => digimon.name);
        console.log('Digimon Names:', names);
}
fetchDigimonNames();
console.log('after fetchDigimonNames');


