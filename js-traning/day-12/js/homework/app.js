/**
 * Tasks 3–4 — import named ops + default calculate from ./calc.js
 * (Assignment often names this file app.js; it lives under homework/ next to calc.js.)
 */
import calculate, { add, subtract, multiply, divide } from "./calc.js";

console.log("Task 3 — add(10, 4):", add(10, 4));
console.log("Task 3 — subtract(10, 4):", subtract(10, 4));
console.log("Task 3 — multiply(6, 7):", multiply(6, 7));
console.log("Task 3 — divide(20, 5):", divide(20, 5));

console.log("Task 4 — calculate('+', 2, 3):", calculate("+", 2, 3));
console.log("Task 4 — calculate('*', 4, 5):", calculate("*", 4, 5));
