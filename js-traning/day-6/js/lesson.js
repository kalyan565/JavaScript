// 1. Function Declarations
function add(a, b) {
  console.log(a + b);
}
add(2, 3);

// 2. return — Functions Give Back Values
function xyz() {
  console.log("hi");
}
const x = xyz();
console.log("return value of xyz():", x); // undefined — no return statement

function double(n) {
  return n * 2;
}
console.log("double(5):", double(5));

// 3. Function Expressions
const greet = function (name) {
  return "hello, " + name;
};
console.log(greet("kalyan"));

// 4. Arrow Functions =>
const add1 = (a, b) => {
  return a + b;
};
console.log(add1(1, 1));

const add2 = (a, b) => a + b;
console.log(add2(2, 2));

const square = (x) => x * x;
console.log(square(4));

const greet1 = () => "hello";
console.log(greet1());

// 5. Parameters & Defaults
function greet2(name = "kalyan") {
  console.log(name);
}
greet2("xyz");
greet2();

// 6. Scope: Global vs Local
let outer = "I am outside the function";

function demoScope() {
  let inner = "I exist only inside demoScope";
  console.log("inside — can read outer:", outer);
  console.log("inside — inner:", inner);
}

demoScope();
console.log("outside — outer:", outer);
// console.log(inner); // ReferenceError — inner is not in this scope

// 7. Pure Functions (Intro)
function addPure(a, b) {
  return a + b; // same inputs → same output; no side effects on outer state
}
console.log("pure:", addPure(2, 3), addPure(2, 3));

let counter = 0;
function impureBump() {
  counter += 1; // side effect: changes outer variable
  return counter;
}
console.log("impure:", impureBump(), impureBump());
