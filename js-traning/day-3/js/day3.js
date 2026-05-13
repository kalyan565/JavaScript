// Day 3 homework — GST, == vs ===, ternary ages, discount calculator

// 1. Function-less GST calculator
const price = 1500;
const gstRate = 18;
const gstAmount = (price * gstRate) / 100;
const total = price + gstAmount;

console.log("Price:", price);
console.log("GST Amount:", gstAmount);
console.log("Total Amount:", total);

// 2. Ten value pairs: == vs ===
/*
| # | Expression A   | Expression B | ==    | ===   | Why (short)                          |
|---|----------------|--------------|-------|-------|--------------------------------------|
| 1 | 5              | "5"          | true  | false | == converts string to number         |
| 2 | true           | 1            | true  | false | == converts boolean to number        |
| 3 | false          | 0            | true  | false | ==: false → 0                        |
| 4 | null           | undefined    | true  | false | == special case; types differ        |
| 5 | ""             | 0            | true  | false | ==: both treated as “falsy number”   |
| 6 | " "            | 0            | true  | false | ==: string trims/coerces to number   |
| 7 | []             | false        | true  | false | ==: [] → "" → 0                      |
| 8 | [1]            | 1            | true  | false | ==: array coerced to primitive       |
| 9 | 0              | false        | true  | false | ==: false → 0                        |
|10 | "10"           | 10           | true  | false | ==: string "10" → number 10          |
|   |                |              |       |       | === never coerces — types must match |
*/
console.log(5 == "5", 5 === "5");
console.log(true == 1, true === 1);
console.log(false == 0, false === 0);
console.log(null == undefined, null === undefined);
console.log("" == 0, "" === 0);
console.log(" " == 0, " " === 0);
console.log([] == false, [] === false);
console.log([1] == 1, [1] === 1);
console.log(0 == false, 0 === false);
console.log("10" == 10, "10" === 10);

// 3. Ternary: "adult" if age >= 18 else "minor" — five ages
console.log(10, "→", 10 >= 18 ? "adult" : "minor");
console.log(17, "→", 17 >= 18 ? "adult" : "minor");
console.log(18, "→", 18 >= 18 ? "adult" : "minor");
console.log(25, "→", 25 >= 18 ? "adult" : "minor");
console.log(65, "→", 65 >= 18 ? "adult" : "minor");

// 4. Discount calculator: member AND total > 1000 → 10% off, else 0 (&& + ternary)
let isMember = true;
let purchaseTotal = 1500;
let discount = isMember && purchaseTotal > 1000 ? purchaseTotal * 0.1 : 0;
let finalAmount = purchaseTotal - discount;
console.log("Case A member, 1500 → discount:", discount, "final:", finalAmount);

isMember = true;
purchaseTotal = 800;
discount = isMember && purchaseTotal > 1000 ? purchaseTotal * 0.1 : 0;
finalAmount = purchaseTotal - discount;
console.log("Case B member, 800 → discount:", discount, "final:", finalAmount);

isMember = false;
purchaseTotal = 1500;
discount = isMember && purchaseTotal > 1000 ? purchaseTotal * 0.1 : 0;
finalAmount = purchaseTotal - discount;
console.log("Case C non-member, 1500 → discount:", discount, "final:", finalAmount);
