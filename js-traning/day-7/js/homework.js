// Task 1 — map names to greetings
const names = ["Priya", "Aarav", "Riya"];
const greetings = names.map((name) => `Hello, ${name}`);
console.log("Task 1 — greetings:", greetings);

// Task 2 — filter even numbers, then reduce to sum
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const evenSum = nums
    .filter((n) => n % 2 === 0)
    .reduce((sum, n) => sum + n, 0);
console.log("Task 2 — sum of evens:", evenSum);

// Task 3 — max with Math.max(...arr) and reduce
const arr = [3, 1, 4, 1, 5, 9, 2, 6];
const maxSpread = Math.max(...arr);
const maxReduce = arr.reduce((max, n) => (n > max ? n : max), arr[0]);
console.log("Task 3 — Math.max:", maxSpread, "reduce:", maxReduce);

// Task 4 — average of any numeric array
function average(arr) {
  const sum = arr.reduce((total, n) => total + n, 0);
  return sum / arr.length;
}

console.log("Task 4 — average([10, 20, 30]):", average([10, 20, 30]));
console.log("Task 4 — average(arr):", average(arr));
