const user = { name: "Priya" };
// Every object literal's prototype is Object.prototype
console.log(Object.getPrototypeOf(user) === Object.prototype); // true
// user has no .toString() of its own — but it can call one!
console.log(user.toString()); // "[object Object]"
// Why? toString lives on Object.prototype.
console.log(Object.prototype.hasOwnProperty("toString")); // true
// At the END of the chain: null
console.log(Object.getPrototypeOf(Object.prototype)); // null



const animal = {
eat() { console.log(`${this.name} is eating`); },
sleep() { console.log(`${this.name} is sleeping`); },
};
// dog inherits from animal
const dog = Object.create(animal);
dog.name = "Bruno";
dog.eat(); // "Bruno is eating" ← method found on animal (the prototype)
dog.sleep(); // "Bruno is sleeping" ← same path
// Confirm the link
console.log(Object.getPrototypeOf(dog) === animal); // true
// Own properties vs inherited
console.log(dog.hasOwnProperty("name")); // true ← on dog itself
console.log(dog.hasOwnProperty("eat")); 


const grandparent = { lastName: "Sharma" };
const parent = Object.create(grandparent);
parent.firstName = "Priya";
const child = Object.create(parent);
child.age = 5;
// READ — walks up
console.log(child.age); // 5 ← own
console.log(child.firstName); // "Priya" ← from parent
console.log(child.lastName); // "Sharma" ← from grandparent
console.log(child.toString); // ƒ ← from Object.prototype (one more step)
// WRITE — creates an own property; the prototype is untouched
child.firstName = "Anaya";
console.log(child.firstName); // "Anaya" ← own property now shadows parent's
console.log(parent.firstName); // "Priya" ← prototype unchanged


const animal1 = { eat() {} };
const dog1 = Object.create(animal1);
dog.bark = () => console.log("woof");
console.log(dog1.hasOwnProperty("bark")); // true — dog has its own bark
console.log(dog1.hasOwnProperty("eat")); // false — eat is inherited
console.log("bark" in dog1); // true — found on dog
console.log("eat" in dog1); // true — found on animal (chain)
console.log("toString" in dog1); // true — found on Object.prototype
