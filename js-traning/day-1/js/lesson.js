console.log("Hello, Jaipur!");           // prints to the console
console.log("My name is Priya");         // prints another line
console.log("I'm learning JavaScript");  // a third

// let — value can change
let age = 25;
console.log(age);                  // 25

age = 26;                          // reassigning is allowed
console.log(age);                  // 26

// const — value is fixed
const name = "Priya";
console.log(name);                 // "Priya"

// name = "Aarav";                 // TypeError: Assignment to constant variable

// Good names — clear, camelCase, descriptive
const firstName = "Priya";
const totalPrice = 1180;
const isLoggedIn = true;

// Bad names — unclear, non-standard
const x = 1180;                    // x of what?
const total_price = 1180;          // snake_case is for Python, not JS convention
const IsLoggedIn = true;           // PascalCase is for classes (Day 17)

if (true) {
  var leaky = "I escape!";
  let trapped = "I stay";
}
console.log(leaky);                // "I escape!"        ← bug-prone!
// console.log(trapped);           // ReferenceError — trapped is gone

// var can be re-declared (silent overwrite)
var count = 1;
var count = 99;                    // no error — replaced silently
console.log(count);                // 99

// let blocks re-declaration
let total = 1;
// let total = 99;                 // SyntaxError — already declared


{
  let cityName = "Jaipur";
  const pin = 302001;
  console.log(cityName);           // "Jaipur"
  console.log(pin);                // 302001
}

// console.log(cityName);          // ReferenceError — outside the block
// console.log(pin);               // ReferenceError — outside the block

// Same with if-blocks
if (true) {
  let inside = "hidden";
  console.log(inside);             // "hidden"
}
// console.log(inside);            // ReferenceError

// var ignores blocks (Topic 5 callback)
{
  var sneaky = "I leak out";
}
console.log(sneaky);               // "I leak out"


// var hoists with the value `undefined`
console.log(myAge);                // undefined (NOT an error!)
var myAge = 25;

// let / const hoist but stay UNINITIALISED — accessing them is an error
// console.log(myCity);            // ReferenceError: Cannot access before initialization
// let myCity = "Jaipur";

// Function declarations hoist FULLY
greet();                            // "Namaste"  ← works!
function greet() { console.log("Namaste"); }