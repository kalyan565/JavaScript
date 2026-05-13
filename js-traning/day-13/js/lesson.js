
console.log(a);        
var a = 1;

//console.log(b);        
//let b = 2;

// console.log(c);       
// const c = 3;

greet();              
function greet() { console.log("Hi"); }


// console.log(score);    // undefined            ← no error, but probably not what you wanted
// var score = 90;

// let — TDZ catches the bug for you
// console.log(level);    // ReferenceError       ← TDZ — Cannot access 'level' before initialization
// let level = 5;

// The TDZ "ends" exactly when the let/const line runs:
{
  // <-- start of block. 'mark' is in TDZ here
  // console.log(mark);  // would throw
  let mark = 87;
  console.log(mark);    // 87  ← TDZ has ended, mark is initialised
}

// Function declaration — works BEFORE its definition
sayHi();           // "Hi"      ← full body hoisted
function sayHi() {
  console.log("Hi");
}

// Function expression with var — TypeError
// greet1();           // TypeError: greet is not a function
//                    //   ↑ greet was hoisted with value 'undefined'.
//                    //     Calling undefined() throws TypeError.
// var greet1 = function () {
//   console.log("Hello");
// };

// Function expression with const — ReferenceError (TDZ)
// welcome();         // ReferenceError: Cannot access 'welcome' before initialization
// const welcome = function () {
//   console.log("Welcome");
// };

// Arrow function — same as const above (always TDZ if let/const)
const shout = () => console.log("HEY");
shout();           // ReferenceError

let item = "Laptop"
const price = 60000;
const tax = 0.18;

const singleLine = `The ${item} costs ${price} + ${price * tax} GST = ${price + (price * tax)}`;


const multiline = `
The ${item} costs:
Base Price: ${price}
GST 18%: ${price * tax}
Total: ${price + (price * tax)}
`;
console.log(singleLine)
console.log(multiline);