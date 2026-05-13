// Task 1 — GST calculator
const GST_RATE = 18;

let price = 850;
let gst = (price * GST_RATE) / 100;
let total = price + gst;
console.log(`Price: ₹${price}, GST: ₹${gst}, Total: ₹${total}`);

price = 1234.50;
gst = (price * GST_RATE) / 100;
total = price + gst;
console.log(`Price: ₹${price}, GST: ₹${gst}, Total: ₹${total}`);
// Oddness: binary floats — e.g. GST/total may show many decimals. Use rounding for money:
console.log(
  "Rounded total:",
  Math.round((price + (price * GST_RATE) / 100) * 100) / 100
);
// Classic float oddness (not GST-specific, but shows why money uses rounding):
console.log("0.1 + 0.2 === 0.3 ?", 0.1 + 0.2 === 0.3, "(value:", 0.1 + 0.2, ")");

// Task 2 — == vs === (predict each result before running)
// 5 vs "5" — == coerces string to number; === forbids mixed types
console.log(5 == "5", 5 === "5");

// 0 vs false — == coerces boolean to number (false → 0)
console.log(0 == false, 0 === false);

// null vs undefined — == treats them as "same absence"; === keeps types apart
console.log(null == undefined, null === undefined);

// "" vs false — ==: both coerce toward falsy/0; === different types
console.log("" == false, "" === false);

// "abc" vs "abc" — same string: both true (no coercion needed)
console.log("abc" == "abc", "abc" === "abc");

// Task 3 — logical operators
const age = 22;
const hasEmail = true;
const canRegister = age >= 18 && hasEmail;

const userName = "";
const displayName = userName || "Guest";

const isLoggedIn = false;
const isLoggedOut = !isLoggedIn;

console.log("canRegister:", canRegister);
console.log("displayName:", displayName);
console.log("isLoggedOut:", isLoggedOut);

// Bonus — ternary practice
const feeAt70 = 70 >= 65 ? 0 : 100;
const feeAt30 = 30 >= 65 ? 0 : 100;
console.log("fee (age 70):", feeAt70);
console.log("fee (age 30):", feeAt30);

console.log(`Discount: ${70 >= 65 ? "Yes" : "No"}`);
console.log(`Discount: ${30 >= 65 ? "Yes" : "No"}`);

const score = 67;
const level =
  score >= 80 ? "high" : score >= 50 ? "medium" : "low";
console.log("score", score, "→", level);
