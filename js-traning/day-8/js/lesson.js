/**
 * Topic 1 ? Object literals
 * Syntax: const obj = { key: value, ... }. Values can include nested objects and arrays.
 */
const userNested = {
  name: "Priya",
  age: 24,
  city: "Jaipur",
  isActive: true,
  hobbies: ["reading", "trekking"],
  address: {
    street: "MI Road",
    pincode: "302001",
  },
};
console.log("Topic 1 - nested user:", userNested);

/**
 * Topic 2 ? Dot vs bracket notation
 * Dot (user.name) is default. Brackets for dynamic keys (user[field]) or keys with spaces.
 * Missing properties are undefined (no error).
 */
const user = { name: "Priya", age: 24, "favourite color": "blue" };

console.log("Topic 2 - dot:", user.name, user.age);

const field = "name";
console.log("Topic 2 - bracket variable:", user[field]);
console.log("Topic 2 - bracket spaced key:", user["favourite color"]);
console.log("Topic 2 - missing property:", user.email);

const u = { name: "Priya" };
console.log("follow u.name", u.name);
const f = "name";
console.log("follow u[f]", u[f]);
console.log("follow u.email", u.email);

/**
 * Topic 3 ? Add, update, delete properties
 * const binds the variable to the object reference; you can still change properties inside.
 */
const userMutable = { name: "Priya", age: 24 };
userMutable.email = "priya@example.com";
userMutable.city = "Jaipur";
userMutable.age = 25;
delete userMutable.city;
console.log("Topic 3 - after mutations:", userMutable);

/**
 * Topic 4 ? Methods and this
 * A method is a function property. Use greet() { } shorthand ? not arrow functions (no own this).
 */
const userMethods = {
  name: "Aarav",
  age: 22,
  greet() {
    return `Hello, I am ${this.name}`;
  },
  birthday() {
    this.age += 1;
    return `Happy birthday! ${this.name} is now ${this.age}`;
  },
};
console.log("Topic 4 - greet:", userMethods.greet());
console.log("Topic 4 - birthday:", userMethods.birthday());
console.log("Topic 4 - age after birthday:", userMethods.age);

/**
 * Topic 5 ? Destructuring
 * Pull properties into variables; rename (name: userName); defaults (phone = "N/A"); params.
 */
const userFull = {
  name: "Riya",
  age: 23,
  city: "Jaipur",
  email: "r@x.in",
};

const name1 = userFull.name;
const age1 = userFull.age;
console.log("Topic 5 - manual:", name1, age1);

const { name: dName, age: dAge } = userFull;
console.log("Topic 5 - destructured:", dName, dAge);

const { name: userName, city } = userFull;
console.log("Topic 5 - rename:", userName, city);

const { phone = "N/A" } = userFull;
console.log("Topic 5 - default phone:", phone);

const greetFromObj = ({ name: n, age: a }) => `Hi ${n}, age ${a}`;
console.log("Topic 5 - param destructuring:", greetFromObj(userFull));

const u2 = { a: 1, b: 2 };
const { a, b } = u2;
console.log("follow a, b", a, b);
const { phone: p2 = "N/A" } = u2;
console.log("follow phone default", p2);

/**
 * Topic 6 ? Object.keys, Object.values, Object.entries
 * Convert an object to arrays of keys, values, or [key, value] pairs for iteration.
 */
const userKeys = { name: "Anaya", age: 21, city: "Jaipur" };
console.log("Topic 6 - keys:", Object.keys(userKeys));
console.log("Topic 6 - values:", Object.values(userKeys));
console.log("Topic 6 - entries:", Object.entries(userKeys));
Object.entries(userKeys).forEach(([key, value]) => {
  console.log(`Topic 6 - ${key}: ${value}`);
});

/**
 * Topic 7 ? Object.assign and spread
 * Merge objects or shallow-copy: Object.assign({}, a, b) or { ...a, ...b }.
 */
const objA = { name: "Priya" };
const objB = { age: 24 };
const merged = Object.assign({}, objA, objB);
console.log("Topic 7 - Object.assign:", merged);
const merged2 = { ...objA, ...objB };
console.log("Topic 7 - spread merge:", merged2);
const copy = { ...objA };
console.log("Topic 7 - shallow copy:", copy);
