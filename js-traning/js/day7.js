const f = ['a','b','c'];
console.log(f.at(-1));  

const numbers = [1,2,3,4,5];
numbers.forEach(n => console.log(n*2));

const doubled = numbers.map(n => n*2);
console.log(numbers);
console.log(doubled);

const prices = [100,200,300];
const gst = prices.map(n => n*1.18);
console.log(gst)

console.log("-----------------------------------------------------------");

[1,2,3].forEach(n => console.log(n*2));
console.log([1,2,3].map(n => n*2))

console.log("---------------------------------------------------------------------");
const scoring = [89,23,56,47,88,95];
const pass = scoring.filter(n => n>= 50);
console.log(pass);

const fistFail = scoring.find(n => n<30);
console.log(fistFail)

console.log(scoring.some(n => n>90));

console.log(scoring.every(n => n>60));

console.log("------------------------------------------------------------------")
const numbers3 = [4,5,6,7,8];
const max = numbers.reduce((a,n)=> n>a ? n : a, -Infinity);
console.log(max)


const a = [1,2,3,4]
const b = [5,6,7,8]

const acpy = [...a];
console.log(acpy)

const merged = [...a,...b]
console.log(merged)

const newele = [...a,99,...b]
console.log(newele)

console.log(Math.max(...a))
