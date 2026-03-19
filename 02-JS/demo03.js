// All Resources
// https://www.geeksforgeeks.org/javascript-template-literals/
// https://www.w3schools.com/js/js_array_methods.asp
// https://www.w3schools.com/js/js_array_iteration.asp


// Template Literals
// uses: 
// 1- String Interpolation with Expressions
let x = 5;
let y = 10;
console.log('The sum of ${x} and ${y} is ${x + y}');
console.log('The sum of'+ x + 'and' + y + 'is' + (x+y));
console.log(`The sum of ${x} and ${y} is ${x + y}`);

// 2- Multi-line Strings with Template Literals
const s = `This is a multi-line
string that spans across
several lines.`;
console.log(s);

// PS: Escaping Backticks and Dollar Signs
// In JavaScript, if you need to include backticks or dollar signs inside template literals, you can escape them using a backslash (\).
const s2 = `This is a backtick: \` and this is a dollar sign: \$`;
console.log(s2);



// Array iterations
// for / while/ do while

let people = ['Razan', 'Sherry', 'Abdulrahman', 'Aisha'];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}


//////////////////////// *
// foreach
// Array.forEach is a method on an array that processes every element in the array with a callback
// The callback is always given the current element's value and index in the array as args
//forEach runs a CALLBACK function WITH every element of the array

// people.forEach(function(person,index){
//     console.log(person);
//     console.log(index);
// })

people.forEach((person, index) => {
    console.log(person);
    console.log(index);
})

people.forEach((person) => {
    console.log(person);
})



//////////////////////// *
// map
// array.map( fn(v,i) {} ) Much like array.forEach()
// The array.map() function iterates over an array and runs a call back for each element. 
// The callback receives the value and the index of the array element as a parameter.
// The difference is that `.map()` will always return you a **new array** of the **same length** as the original array comprised of your return values


let numbers = [1, 3, 5, 9];
// squares of the numbers in the array

let squares = numbers.map((item) => {
    return item * item;
})

console.log(numbers); //[1,3,5,9];
console.log(squares); //[1,9,25,81];


let people2 = [
    { fname: "Atallah", role: "Dad" },
    { fname: "Messina", role: "Mom" },
    { fname: "Razan", role: "Kid" },
    { fname: "Zaid", role: "Kid" },
];

let fnames = people2.map((person) => {
    // return person.fname; // [ 'Atallah', 'Messina', 'Razan', 'Zaid' ]
    if (person.fname === 'Atallah') {
        return person.fname;
    } else {
        return 'nothing';
    }
})

// let fnames = people2.map(person=> person.fname);
// () [] {} <>
console.log(fnames);



//////////////////////// *
// filter
// .filter() similar to .map() -> iterate over an array and runs a callback for each element
// it will return a new array and it could be the same length of the original one or not
// the elements will be from the original array that match your criteria(your filter condition) 

let numbers2 = [1, 4, 6, 9];
let evens = numbers2.filter((num)=>{
    if(num%2===0) return num;
})

console.log(numbers2);
console.log(evens);



// 1==1 >> T
// 1!=1 >> T 

// 1=="1" >> T(only value)
// 1==="1" >> F (value & data type)


