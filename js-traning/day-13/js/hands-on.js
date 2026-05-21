console.log(name); // this will print undefiend because var by defaults sets on the top 
var name = "priya";
console.log(name);

let city = "jaipur"
console.log(city);


sayHi()

function sayHi() {
    console.log("hi")
}

var greet =  function() {
    console.log("greeet")
}
greet()


function mulitply(a,b) { 
    return a*b 
}

function square(n) {
    return mulitply(n,n)
}

console.log(square(5))