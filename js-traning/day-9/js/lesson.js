/**
 * Topic 1 - Template literals
 * Backticks: interpolation ${}, multiline strings, embedded expressions.
 */
const personName = "Priya";
const personAge = 24;

const msg1 =
  "Hello, " + personName + ". You are " + personAge + " years old.";
const msg2 = `Hello, ${personName}. You are ${personAge} years old.`;
console.log("Topic 1 - concat:", msg1);
console.log("Topic 1 - template:", msg2);

const address = `MI Road
Jaipur 302001
Rajasthan`;
console.log("Topic 1 - multiline address:\n" + address);

const total = 1180;
const summary = `Total ${
  total >= 1000 ? "qualifies" : "doesn't qualify"
} for free shipping.`;
console.log("Topic 1 - expression in template:", summary);

const taxed = `Final price: ₹${(1000 * 1.18).toFixed(2)}`;
console.log("Topic 1 - math in template:", taxed);

const n = "Priya";
console.log("follow `Hi, ${n}!` ->", `Hi, ${n}!`);
console.log("follow `Result: ${10 * 5 + 2}` ->", `Result: ${10 * 5 + 2}`);

/**
 * Topic 2 - Array destructuring
 * By position: skip with commas, defaults, swap, rest ...tail
 */
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log("Topic 2 - basic:", first, second, third);

const [, , lastColor] = colors;
console.log("Topic 2 - skip to last:", lastColor);

const [c0, c1, c2, c3 = "yellow"] = colors;
console.log("Topic 2 - default d:", c3);

let x = 1;
let y = 2;
[x, y] = [y, x];
console.log("Topic 2 - swap x, y:", x, y);

const nums = [1, 2, 3, 4, 5];
const [head, ...tail] = nums;
console.log("Topic 2 - rest head:", head, "tail:", tail);

const [a10, b10, ...restNums] = [10, 20, 30, 40, 50];
console.log("follow [a,b,...rest]:", a10, b10, restNums);

/**
 * Topic 3 - Object destructuring (deeper)
 * Rename, default, nested, rest, function params, param defaults = {}
 */
const user = {
  name: "Aarav",
  age: 22,
  address: {
    city: "Jaipur",
    pincode: "302001",
  },
};

const {
  address: { city },
} = user;
console.log("Topic 3 - nested city:", city);

const { name: userName, phone = "N/A" } = user;
console.log("Topic 3 - rename + default:", userName, phone);

const { name: onlyName, ...userRest } = user;
console.log("Topic 3 - rest name:", onlyName, "rest:", userRest);

const greet = ({ name: nm, age: ag }) => `${nm} is ${ag}`;
console.log("Topic 3 - greet(user):", greet(user));

const showInfo = ({ name: who = "Guest", role = "User" } = {}) =>
  `${role}: ${who}`;
console.log("Topic 3 - showInfo():", showInfo());
console.log("Topic 3 - showInfo({ name: Riya }):", showInfo({ name: "Riya" }));

const u = { a: 1, b: 2, c: 3 };
const { a: ua, ...restU } = u;
console.log("follow rest from object:", restU);

/**
 * Topic 4 - Rest parameters
 * ...args collects remaining arguments into an array (must be last).
 */
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log("Topic 4 - sum(1,2,3):", sum(1, 2, 3));
console.log("Topic 4 - sum(1..5):", sum(1, 2, 3, 4, 5));
console.log("Topic 4 - sum():", sum());

function greetMany(greeting, ...names) {
  return names.map((n) => `${greeting}, ${n}`).join(" | ");
}
console.log("Topic 4 - greetMany:", greetMany("Hi", "Priya", "Aarav", "Riya"));

const max = (...n) => Math.max(...n);
console.log("follow max(3,1,4,...):", max(3, 1, 4, 1, 5, 9, 2, 6));

/**
 * Topic 5 - Spread (arrays + objects)
 * Object spread: copy, override; later spread wins on duplicate keys.
 */
const arrA = [1, 2, 3];
const arrB = [4, 5, 6];
console.log("Topic 5 - array spread:", [...arrA, ...arrB]);
console.log("Topic 5 - Math.max(...arrA):", Math.max(...arrA));

const profile = { name: "Priya", age: 24, city: "Jaipur" };
const updated = { ...profile, age: 25 };
console.log("Topic 5 - object spread override:", updated);

const defaults = { theme: "light", notifications: true };
const userPrefs = { theme: "dark" };
const finalPrefs = { ...defaults, ...userPrefs };
console.log("Topic 5 - merge (later wins):", finalPrefs);

/**
 * Topic 6 - Defaults: || vs ??
 * || falls back on any falsy; ?? only on null or undefined.
 */
console.log("Topic 6 - 0 || default:", 0 || "default");
console.log("Topic 6 - '' || default:", "" || "default");
console.log("Topic 6 - null || default:", null || "default");

console.log("Topic 6 - 0 ?? default:", 0 ?? "default");
console.log("Topic 6 - '' ?? default:", "" ?? "default");
console.log("Topic 6 - null ?? default:", null ?? "default");
console.log("Topic 6 - undefined ?? default:", undefined ?? "default");

const userInputCount = 0;
const count = userInputCount ?? 1;
console.log("Topic 6 - count with ?? (keep 0):", count);

/**
 * Topic 7 - Computed property names
 * [expr] as key inside object literal.
 */
const fieldName = "email";
const fieldValue = "priya@x.in";

const legacyUser = {};
legacyUser[fieldName] = fieldValue;

const user2 = {
  name: "Priya",
  [fieldName]: fieldValue,
  [`is_${fieldName}_verified`]: true,
};
console.log("Topic 7 - computed keys:", user2);
