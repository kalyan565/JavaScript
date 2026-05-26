/**
 * Day 16 — Prototypes & prototype chain (class practice)
 * Mirrors day-16/js/hands-on.js tasks: each block has the task as comments, then code.
 */

console.log("=== Day 16 — Hands-on (classwork) ===\n");

// ---------------------------------------------------------------------------
// Task 1 — Inspect a prototype
// Create arr = [1,2,3]. Walk Object.getPrototypeOf until null.
// Chain: arr → Array.prototype → Object.prototype → null
// ---------------------------------------------------------------------------
console.log("--- Task 1: Inspect a prototype ---");
const arr = [1, 2, 3];
const arrProto1 = Object.getPrototypeOf(arr);
console.log("Object.getPrototypeOf(arr):", arrProto1);
console.log("Is Array.prototype?", arrProto1 === Array.prototype);

const arrProto2 = Object.getPrototypeOf(arrProto1);
console.log("Next link:", arrProto2);
console.log("Is Object.prototype?", arrProto2 === Object.prototype);

const arrProto3 = Object.getPrototypeOf(arrProto2);
console.log("End of chain:", arrProto3);
console.log("Ends at null?", arrProto3 === null);

// ---------------------------------------------------------------------------
// Task 2 — Object.create: vehicle with start(); car & bike with names
// ---------------------------------------------------------------------------
console.log("\n--- Task 2: Object.create (vehicle → car, bike) ---");
const vehicle = {
  start() {
    console.log(`${this.name} starting`);
  },
};
const car = Object.create(vehicle);
car.name = "Tata Nexon";
const bike = Object.create(vehicle);
bike.name = "Royal Enfield";
car.start();
bike.start();

console.log("car.hasOwnProperty('name'):", car.hasOwnProperty("name"));
console.log("car.hasOwnProperty('start'):", car.hasOwnProperty("start"));
console.log("'start' in car:", "start" in car);

// ---------------------------------------------------------------------------
// Task 3 — Constructor inheritance: Person → Student
// ---------------------------------------------------------------------------
console.log("\n--- Task 3: Person → Student ---");
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log("Hi, I'm " + this.name);
};

function Student(name, school) {
  Person.call(this, name);
  this.school = school;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function () {
  console.log(this.name + " studies at " + this.school);
};

const riya = new Student("Riya", "IIT Delhi");
riya.greet();
riya.study();

// ---------------------------------------------------------------------------
// Bonus — hasOwnProperty vs "in"
// Rule: use hasOwnProperty / Object.hasOwn for own keys only;
//       use "in" when inherited keys (or Object.prototype) should count too.
// ---------------------------------------------------------------------------
console.log("\n--- Bonus: hasOwnProperty vs in ---");
const dog = Object.create({ species: "Canis" });
dog.name = "Bruno";
console.log("dog.hasOwnProperty('name'):", dog.hasOwnProperty("name"));
console.log("dog.hasOwnProperty('species'):", dog.hasOwnProperty("species"));
console.log("'name' in dog:", "name" in dog);
console.log("'species' in dog:", "species" in dog);
console.log("'toString' in dog:", "toString" in dog);

console.log("\n=== End Day 16 hands-on ===");
