// Day 2 homework — primitives, template literals, floats, user card, typeof bonus

// 1. One variable of EACH primitive type — log value and typeof
const hwNum = 42;
const hwStr = "hello";
const hwBool = true;
let hwUndef;
const hwNull = null;
const hwBig = 10n;
const hwSym = Symbol("hw");

console.log(hwNum, typeof hwNum);
console.log(hwStr, typeof hwStr);
console.log(hwBool, typeof hwBool);
console.log(hwUndef, typeof hwUndef);
console.log(hwNull, typeof hwNull);
console.log(hwBig, typeof hwBig);
console.log(hwSym, typeof hwSym);

// 2. Three variables — FIVE different sentences (template literals)
const name = "Aarav";
const age = 22;
const city = "Jaipur";

console.log(`${name} is ${age} years old and lives in ${city}.`);
console.log(`From ${city}: meet ${name}, age ${age}.`);
console.log(`${name} moved to ${city} at age ${age}.`);
console.log(`Travel tip: ${city} is home for ${name} (${age}).`);
console.log(`Profile — Name: ${name}, City: ${city}, Age next birthday: ${age + 1}.`);

// 3. Float surprise + multiply-to-paise trick (exact 0.3)
console.log(0.1 + 0.2);
console.log((10 + 20) / 100);
console.log(((10 + 20) / 100) === 0.3);

// 4. User card (multi-line template) + one fact
const fact = "learning JavaScript every day";

const userCard = `
Name: ${name}
Age: ${age}
City: ${city}
Fact: ${fact}
`;
console.log(userCard);

// 6. (Bonus) typeof on [], {}, and a function
console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});
