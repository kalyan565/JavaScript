// Topic 1 — Creating & accessing
const fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // apple
console.log(fruits[2]); // mango
console.log(fruits.length); // 3
console.log(fruits[fruits.length - 1]); // mango (last)

fruits[1] = "cherry";
console.log(fruits); // ["apple", "cherry", "mango"]

console.log(fruits[-1]); // undefined (negative index is not special)
console.log(fruits.at(-1)); // mango

const f = ["a", "b", "c"];
console.log("follow along f[0]", f[0]);
console.log("follow along f.length", f.length);
console.log("follow along f.at(-1)", f.at(-1));

// Topic 2 — Mutating methods (change the original array)
const cart = ["apple", "banana"];
cart.push("mango");
console.log("cart after push", cart);

const popped = cart.pop();
console.log("cart after pop", cart, "returned", popped);

cart.unshift("orange");
console.log("cart after unshift", cart);

const shifted = cart.shift();
console.log("cart after shift", cart, "returned", shifted);

const items = ["a", "b", "c", "d"];
items.splice(1, 2);
console.log("items after splice(1,2)", items);

const more = ["a", "b", "c"];
more.splice(1, 0, "X", "Y");
console.log("more after splice insert", more);

// Topic 3 — Non-mutating methods (slice vs splice)
const arr = [1, 2, 3, 4, 5];
console.log("slice(1,3)", arr.slice(1, 3));
console.log("concat", arr.concat([6, 7]));
console.log("join", arr.join("-"));
console.log("includes(3)", arr.includes(3));
console.log("indexOf(4)", arr.indexOf(4));
console.log("original arr unchanged", arr);

// Topic 4 — forEach (side effects) vs map (new array)
const numbers = [1, 2, 3, 4];
numbers.forEach((n) => console.log("forEach double", n * 2));

const doubled = numbers.map((n) => n * 2);
console.log("doubled", doubled);
console.log("numbers after map", numbers);

const prices = [100, 200, 300];
const withGst = prices.map((p) => p * 1.18);
console.log("withGst", withGst);

[1, 2, 3].forEach((n) => console.log("follow forEach", n * 2));
console.log("follow map", [1, 2, 3].map((n) => n * 2));
console.log("follow GST map", [100, 200, 300].map((p) => p * 1.18));

// Topic 5 — filter, find, some, every
const scores = [88, 42, 75, 60, 91, 39];
const passing = scores.filter((s) => s >= 60);
console.log("passing", passing);

const firstFail = scores.find((s) => s < 60);
console.log("firstFail", firstFail);

console.log("some < 60", scores.some((s) => s < 60));
console.log("every >= 60", scores.every((s) => s >= 60));

console.log("follow filter", [88, 42, 75, 60, 91].filter((s) => s >= 60));
console.log("follow find", [88, 42, 75, 60].find((s) => s < 60));
console.log("follow every", [88, 42, 75].every((s) => s >= 60));

// Topic 6 — reduce
const reduceNums = [1, 2, 3, 4, 5];
const total = reduceNums.reduce((acc, n) => acc + n, 0);
console.log("sum reduce", total);

const max = reduceNums.reduce((a, n) => (n > a ? n : a), -Infinity);
console.log("max reduce", max);

console.log("follow reduce sum", [10, 20, 30].reduce((a, n) => a + n, 0));

// Topic 7 — spread
const a = [1, 2, 3];
const b = [4, 5, 6];
const aCopy = [...a];
console.log("aCopy", aCopy);

const merged = [...a, ...b];
console.log("merged", merged);

const sandwiched = [...a, 99, ...b];
console.log("sandwiched", sandwiched);

console.log("Math.max(...a)", Math.max(...a));
