function add(a,b) {
    console.log(a+b);
}
add(2,3);


function xyz() {
    console.log("hi");
}
const x = xyz();
console.log(x);

const greet = function(xyz) {
    return "hello, " + xyz;
}

console.log(greet("kalyan"));


const add1 = (a,b) => {
    return a+b ;
}

console.log(add1(1,1));

const add2 = (a,b) => a+b;
console.log(add2(2,2));


const square = x => x*x;
console.log(square(4));

const greet1 = () => "hello";
console.log(greet1());

console.log("-------------------------------------------------------")

function greet2(name = "kalyan") {
    console.log(name);
}
greet2("xyz");
greet2();

