
function area(length, width) {
  return length * width;
}

console.log(area(10, 5));
console.log(area(7, 3));
console.log(area(15, 4));


const areaArrow = (length, width) => length * width;

console.log(areaArrow(8, 2));


function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet("Priya"));
console.log(greet("Aarav"));
console.log(greet());


// Bonus

console.log(greet(null));




const cToF = celsius => (celsius * 9) / 5 + 32;

console.log(cToF(0));   // 32
console.log(cToF(100)); // 212
console.log(cToF(37));  // 98.6
console.log(cToF(45));  // 113



function double(n) {
  return n * 2;
}

console.log(double(2));
console.log(double(5));
console.log(double(10));


let total = 0;

function addToTotal(n) {
  total += n;
  return total;
}

console.log(addToTotal(5));  // 5
console.log(addToTotal(5));  // 10
console.log(addToTotal(5));  // 15
