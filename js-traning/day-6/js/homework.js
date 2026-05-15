function kmToMiles(km) {
  return km * 0.621;
}

function gstAmount(price, rate = 18) {
  return (price * rate) / 100;
}

function fullName(first, last) {
  return `${first} ${last}`;
}

function isAdult(age) {
  return age >= 18;
}

console.log("kmToMiles(10)", kmToMiles(10));
console.log("kmToMiles(5)", kmToMiles(5));

console.log("gstAmount(1000)", gstAmount(1000));
console.log("gstAmount(1000, 12)", gstAmount(1000, 12));

console.log("fullName", fullName("Priya", "Sharma"));

console.log("isAdult(20)", isAdult(20));
console.log("isAdult(16)", isAdult(16));
