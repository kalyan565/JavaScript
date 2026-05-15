/**
 * Task 1 — Template literal from object fields
 */
const person = { first: "Priya", last: "Sharma", city: "Jaipur" };
const { first, last, city } = person;
console.log(
  "Task 1 —",
  `${first} ${last} from ${city}`
);

/**
 * Task 2 — Array destructuring with rest
 */
const nums = [1, 2, 3, 4, 5, 6];
const [head, ...tail] = nums;
console.log("Task 2 — head:", head);
console.log("Task 2 — tail:", tail);

/**
 * Task 3 — multiply(...nums) with rest + reduce
 */
function multiply(...nums) {
  return nums.reduce((acc, n) => acc * n, 1);
}
console.log("Task 3 — multiply(2, 3, 4):", multiply(2, 3, 4));
console.log("Task 3 — multiply(5):", multiply(5));
console.log("Task 3 — multiply():", multiply());

/**
 * Task 4 — Object spread: new object, original unchanged
 */
const user = {
  name: "Aarav",
  age: 21,
  city: "Delhi",
};
const updatedUser = { ...user, age: 22 };
console.log("Task 4 — original (unchanged):", user);
console.log("Task 4 — copy with age updated:", updatedUser);
