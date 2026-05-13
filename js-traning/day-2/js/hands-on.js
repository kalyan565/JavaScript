// Task 1 — variables, + concatenation, template literal, multi-line card
const name = "Aarav";
const age = 22;
const city = "Jaipur";

const oldStyle = name + ", " + age + ", from " + city;
console.log(oldStyle);

const templateStyle = `${name}, ${age}, from ${city}`;
console.log(templateStyle);

const card = `
Name: ${name}
Age: ${age}
City: ${city}
`;
console.log(card);

// Task 3 — null vs undefined
let user;

console.log(user); // undefined
console.log(typeof user); // "undefined"

user = null;

console.log(user); // null
console.log(typeof user); // "object"

console.log(null == undefined); // true
console.log(null === undefined); // false

// Use null when you intentionally mean "no value" (cleared field, API placeholder).
// Leave undefined for "not assigned yet" — optional props, declare-before-assign.

// Bonus — number quirks
console.log(0.1 + 0.2);
console.log((0.1 + 0.2) === 0.3);

console.log(Number.isInteger(5));
console.log(Number.isInteger(5.0));
console.log(Number.isInteger(5.5));

console.log(1 / 0);
console.log("abc" * 2);
