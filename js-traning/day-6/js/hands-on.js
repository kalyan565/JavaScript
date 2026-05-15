// Task 1 — Rectangle area
function area(length, width) {
  return length * width;
}

console.log(area(10, 5));
console.log(area(7, 3));
console.log(area(15, 4));

// Bonus: same logic, arrow + implicit return
const areaArrow = (length, width) => length * width;
console.log("arrow:", areaArrow(8, 2));

// Task 2 — Greeting with default
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("Priya"));
console.log(greet("Aarav"));
console.log(greet());

// Bonus: greet(null) — default does NOT apply (only missing/undefined uses default)
console.log(greet(null)); // "Hello, null!" — null was passed explicitly, so it is not "missing"

// Task 3 — Temperature converter (arrow, implicit return)
// F = C * 9/5 + 32
const cToF = (celsius) => (celsius * 9) / 5 + 32;

console.log(cToF(0)); // 32
console.log(cToF(100)); // 212
console.log(cToF(37)); // 98.6 body temp
console.log(cToF(45)); // 113 Jaipur summer

// Bonus — Pure vs impure
function double(n) {
  return n * 2;
}

console.log("pure double:", double(2), double(5), double(10));

let total = 0;

function addToTotal(n) {
  total += n;
  return total;
}

console.log("impure addToTotal:", addToTotal(5), addToTotal(5), addToTotal(5));

/*
Pure double(n) is easier to reason about: same input always gives the same output
and it does not depend on hidden state. addToTotal depends on prior calls because it
mutates outer `total`, so you must remember the history of calls to predict output.
*/
