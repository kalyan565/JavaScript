// One Global Execution Context for the whole file
const city = "Jaipur"; // lives in Global EC
function greet(name) {
// A new Function EC is created on EACH call to greet()
const message = `Hi ${name} from ${city}`; // 'message' lives in this Function EC
return message;
}
greet("Priya"); // creates Function EC #1, then destroys it
greet("Aarav"); // creates Function EC #2 (fresh — independent of #1)


console.log(name); // line 1
var name = "Priya"; // line 2
console.log(name); // line 3
// What the engine effectively does:
// CREATION PHASE (before any line runs):
// name → undefined ← var allocated, default value
// EXECUTION PHASE (line by line):
// line 1: console.log(name) → undefined (memory exists, value not yet set)
// line 2: name = "Priya" → assignment runs, name now holds "Priya"
// line 3: console.log(name) → "Priya


function multiply(a, b) {
return a * b;
}
function square(n) {
return multiply(n, n);
}
function printSquare(n) {
console.log(square(n)); // logs 25
}
printSquare(5)


console.log(a); // undefined ← var hoisted with undefined
var a = 1;
console.log(b); // ReferenceError ← let hoisted, but in TDZ
let b = 2;
console.log(c); // ReferenceError ← const hoisted, but in TDZ
const c = 3;
greet(); // "Hi" ← function declaration: full body hoisted
function greet() { console.log("Hi")}; 


console.log(score); // undefined ← no error, but probably not what you
wanted
var score = 90;
// let — TDZ catches the bug for you
console.log(level); // ReferenceError ← TDZ — Cannot access 'level' before
initialization
let level = 5;
// The TDZ "ends" exactly when the let/const line runs:
{
// <-- start of block. 'mark' is in TDZ here
// console.log(mark); // would throw
let mark = 87;
console.log(mark); // 87 ← TDZ has ended, mark is initialised
}


// Function declaration — works BEFORE its definition
sayHi(); // "Hi" ← full body hoisted
function sayHi() {
console.log("Hi");
}

5 / 9
// Function expression with var — TypeError
greet(); // TypeError: greet is not a function
// ↑ greet was hoisted with value 'undefined'.
// Calling undefined() throws TypeError.
var greet = function () {
console.log("Hello");
};
// Function expression with const — ReferenceError (TDZ)
welcome(); // ReferenceError: Cannot access 'welcome' before initialization
const welcome = function () {
console.log("Welcome");
};
// Arrow function — same as const above (always TDZ if let/const)
shout(); // ReferenceError
const shout = () => console.log("HEY");


