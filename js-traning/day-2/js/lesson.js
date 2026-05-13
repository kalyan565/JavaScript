// # Type            Example
// 1 number          42 , 3.14 , -7
// 2 string         "Priya" , 'Jaipur' , `hi`
// 3 boolean         true , false
// 4 null            null (intentional emptiness)
// 5 undefined       undefined (no value yet)
// 6 bigint          9007199254740993n (huge integers)
// 7 symbol          Symbol("id") (unique values, advanced use)


console.log(typeof 42); // "number"
console.log(typeof "Priya"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof 100n); // "bigint"
console.log(typeof Symbol("x")); // "symbol"
// The famous quirk:
console.log(typeof null); // "object" ← this is a 25-year-old bug

const sampleAge = 25; // integer
const price = 1180.50; // decimal
const temp = -5; // negative
const big = 1.5e6; // 1,500,000 (scientific)
console.log(typeof sampleAge); // "number"
console.log(typeof price); // "number" — same type!
// Special number values
console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity
console.log(1 / 0); // Infinity
console.log(NaN); // NaN (Not a Number)
console.log("abc" * 2); // NaN (math on a non-number)
// The famous floating-point gotcha
console.log(0.1 + 0.2); // 0.30000000000000004 ← !!
console.log(0.1 + 0.2 === 0.3); // false


const a = "double quotes";
const b = 'single quotes';
const c = `backticks`;
// All three are strings
console.log(typeof a); // "string"
console.log(typeof c); // "string"
// Quotes inside strings
const sentence1 = 'She said "hi"'; // double quotes inside single
const sentence2 = "It's fine"; // apostrophe inside double
const sentence3 = `Both "OK" and 'fine'`; // backticks accept both
// Escape characters with backslash
const escaped = "She said \"hello\"";
console.log(escaped); // She said "hello"
// String length
console.log("Jaipur".length); // 6
// Strings can be concatenated with +
const greeting = "Hello, " + "Priya";
console.log(greeting); 


const name = "Priya";
const age = 25;
// OLD WAY — concatenation with +
const oldMsg = "Hello, " + name + "! You are " + age + " years old.";
// NEW WAY — template literal with ${}
const newMsg = `Hello, ${name}! You are ${age} years old.`;
console.log(newMsg); // "Hello, Priya! You are 25 years old."
// You can put any expression inside ${}
const price = 1000;
const taxed = `Total with GST: ₹${price * 1.18}`;
console.log(taxed); // "Total with GST: ₹1180"
// Multi-line strings — just press Enter
const card = `
Name: ${name}
Age: ${age}
City: Jaipur
`;
console.log(card);
// (multi-line output — the newlines are real)
// Old-way multi-line was painful:
const oldMultiline = "Name: " + name + "\n" +
"Age: " + age + "\n" +
"City: Jaipur";


const isLoggedIn = true;
const isPremium = false;
console.log(typeof isLoggedIn); // "boolean"
// Booleans come from comparisons
console.log(5 > 3); // true
console.log(5 === "5"); // false (different types — Day 3)
console.log("Priya".length > 0); // true
// Used in if-statements (Day 4)
if (isLoggedIn) {
    console.log("Welcome back!");
}


let cityName; // declared, no value
console.log(cityName); // undefined
function noReturn() {}
console.log(noReturn()); // undefined (functions return undefined bydefault)
// null — you write it explicitly
let selectedUser = null; // "no user selected — yet"
console.log(selectedUser); // null
// Comparison
console.log(null == undefined); // true (loose: they're "the same kind ofempty")
console.log(null === undefined); // false (strict: they're different types)
//
// We'll cover == vs === properly tomorrow (Day 3).
// For now just know: null is intentional, undefined is automatic.
// typeof
console.log(typeof undefined); // "undefined"
console.log(typeof null); 