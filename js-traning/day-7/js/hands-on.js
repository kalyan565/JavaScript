// Task 1 — Cart manipulation (push, unshift, pop, splice mutate the array)

const cart = ["bread", "milk", "eggs"];

cart.push("butter");
cart.unshift("rice");
console.log("Task 1 — cart after push('butter') and unshift('rice'):", cart);

const removed = cart.pop();
console.log("Task 1 — pop() removed:", removed);
console.log("Task 1 — cart after pop:", cart);

cart.splice(1, 1);
console.log("Task 1 — cart after splice(1, 1):", cart);

// Task 2 — Filter, find, every, some

const scores = [88, 42, 75, 60, 91, 39, 55, 70];

const passing = scores.filter((s) => s >= 60);
console.log("Task 2 — passing (>= 60):", passing);

const firstFail = scores.find((s) => s < 60);
console.log("Task 2 — first failing score:", firstFail);

console.log("Task 2 — all passing?", scores.every((s) => s >= 60));

console.log("Task 2 bonus — any score > 90?", scores.some((s) => s > 90));

// Task 3 — Map prices with 18% GST (original array unchanged)

const prices = [100, 250, 500, 1200, 80];

const withGst = prices.map((p) => p * 1.18);
console.log("Task 3 — original prices:", prices);
console.log("Task 3 — with 18% GST:", withGst);

const withGstRounded = prices.map((p) => Number((p * 1.18).toFixed(2)));
console.log(
  "Task 3 bonus — rounded to 2 decimals (Number + toFixed):",
  withGstRounded
);

// Bonus — reduce: total, max, filter + reduce

const expenses = [250, 800, 120, 50, 1500, 75];

const expenseTotal = expenses.reduce((sum, n) => sum + n, 0);
console.log("Reduce bonus — total expenses:", expenseTotal);

const maxExpense = expenses.reduce((max, n) => (n > max ? n : max), expenses[0]);
console.log("Reduce bonus — highest single expense:", maxExpense);

const totalAbove100 = expenses
  .filter((n) => n > 100)
  .reduce((sum, n) => sum + n, 0);
console.log("Reduce bonus — total of expenses > 100:", totalAbove100);
