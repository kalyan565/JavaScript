/**
 * Task 1 — Template literal sentence builder
 * GST and total must be computed inside ${...}, not in separate variables first.
 */
const item = "Laptop";
const price = 60000;
const tax = 0.18;

const sentence = `The ${item} costs ₹${price} + ₹${Math.round(price * tax)} GST = ₹${Math.round(price + price * tax)}.`;
console.log("Task 1 — sentence:", sentence);

const sentenceMultiline = `The ${item} costs
₹${price}
+ ₹${Math.round(price * tax)} GST
= ₹${Math.round(price + price * tax)}.`;
console.log("Task 1 bonus — multiline:\n" + sentenceMultiline);

/**
 * Task 2 — Array + object destructuring
 */
const scores = [88, 75, 92, 60, 45];
const [top, second, ...others] = scores;

const user = {
  name: "Anaya",
  age: 21,
  address: { city: "Jaipur", pincode: "302001" },
};
const {
  name,
  age: userAge,
  address: { city },
} = user;

console.log("Task 2 — top, second, others:", top, second, others);
console.log("Task 2 — name, userAge, city:", name, userAge, city);

/**
 * Task 3 — Rest parameters
 */
function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log("Task 3 — sumAll(1,2,3):", sumAll(1, 2, 3));
console.log("Task 3 — sumAll(10,20,30,40):", sumAll(10, 20, 30, 40));
console.log("Task 3 — sumAll():", sumAll());

function joinNames(separator, ...names) {
  return names.join(separator);
}
console.log(
  "Task 3 — joinNames:",
  joinNames(", ", "Priya", "Aarav", "Riya")
);

/**
 * Bonus — Spread to merge settings + applyPrefs(defaults, prefs)
 */
const defaults = { theme: "light", lang: "en", notifications: true };
const userPrefs = { theme: "dark", fontSize: 16 };

const mergedSettings = { ...defaults, ...userPrefs };
console.log("Bonus — merged settings:", mergedSettings);

function applyPrefs(defaultsObj, prefs) {
  return { ...defaultsObj, ...prefs };
}
console.log("Bonus — applyPrefs:", applyPrefs(defaults, userPrefs));
