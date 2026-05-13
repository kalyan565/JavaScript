console.log(10 + 3); // 13 addition
console.log(10 - 3); // 7 subtraction
console.log(10 * 3); // 30 multiplication
console.log(10 / 3); // 3.3333333... division
console.log(10 % 3); // 1 modulo (remainder)
console.log(10 ** 3); // 1000 exponent (10^3)
// Increment / decrement
let count = 5;
count++; // count = count + 1
console.log(count); // 6
count--; // count = count - 1
console.log(count); // 5
// Real-world: GST calculator
const price = 1000;
const gst = price * 18 / 100; // 180
const total = price + gst; // 1180
console.log(`Total with GST: ₹${total}`); // "Total with GST: ₹1180


// Pure math
console.log(2 + 3); // 5 (number + number)
// Pure concatenation
console.log("Hi, " + "Priya"); // "Hi, Priya" (string + string)
// Mixed — coercion surprise
console.log("Age: " + 25); // "Age: 25" (number → string)
console.log(25 + ""); // "25" (number → string)
console.log("5" + 1); // "51" (number → string!)
console.log("5" - 1); // 4 (string → number, because - has no string version)
console.log("5" * 2); 

let x = 10; // simple assignment
x += 5; // same as: x = x + 5 → x is 15
x -= 3; // same as: x = x - 3 → x is 12
x *= 2; // same as: x = x * 2 → x is 24
x /= 4; // same as: x = x / 4 → x is 6
x %= 4; // same as: x = x % 4 → x is 2
x **= 3; // same as: x = x ** 3 → x is 8
// String compound — also works
let greeting = "Hello";
greeting += ", Priya";
console.log(greeting);

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false
// String comparisons — alphabetical (lexicographic)
console.log("apple" < "banana"); // true ('a' < 'b')
console.log("Z" < "a"); // true (uppercase < lowercase in ASCII!)
// Mixed — JS converts both to numbers
console.log("10" > 5); // true ("10" → 10)
console.log("abc" > 5); 


console.log(5 === 5); // true
console.log("a" === "a"); // true
// Different types — STRICT
console.log(5 === "5"); // false (number vs string)
console.log(0 === false); // false (number vs boolean)
console.log(null === undefined); // false (different types)
// Different types — LOOSE (coercion happens)
console.log(5 == "5"); // true (string converted to number)
console.log(0 == false); // true (both → 0)
console.log("" == false); // true (both → 0)
console.log(null == undefined); // true (special rule)
// Inequality has both versions too
console.log(5 !== "5"); // true (strict not-equal)
console.log(5 != "5"); 



// AND — both must be true
console.log(true && true); // true
console.log(true && false); // false
// OR — at least one must be true
console.log(true || false); // true
console.log(false || false); // false
// NOT — flips the boolean
console.log(!true); // false
console.log(!false); // true
// Real-world: combining conditions
const age = 25;
const hasEmail = true;
const canRegister = age >= 18 && hasEmail;
console.log(canRegister); // true
const isMinor = age < 18;
const isInvited = false;
const cannotEnter = isMinor || !isInvited;
console.log(cannotEnter); // true (because !isInvited is true)
// Short-circuit — return the actual value, not just true/false
const userName = null;
const displayName = userName || "Guest"; // null is falsy → "Guest"
console.log(displayName); // "Guest"
// && returns the first falsy OR the last value
console.log("Priya" && "Aarav"); // "Aarav" (both truthy → last one)
console.log(0 && "anything");