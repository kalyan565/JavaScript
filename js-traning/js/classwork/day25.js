// function multiplier(factor) {
// return (x) => x * factor; // returns a function
// }
// const double = multiplier(2);
// const triple = multiplier(3);
// console.log(double(5)); // 10
// console.log(triple(5));


// function once(fn) {
// let called = false;
// let result;
// return (...args) => {
// if (called) return result;
// called = true;
// return (result = fn(...args));
// };
// }
// const init = once(() => "initialised");
// console.log(init()); // "initialised"
// console.log(init()); // "initialised" (cached, fn NOT called again)


//pure function 
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
} 

//impure function
let total = 0;
function impure(x){
    total = total+x;
    return total;
}
console.log(impure(10));
console.log(impure(5));
console.log(impure(2));

//higher order function
function cal(fn,a,b) {
    return fn(a,b);
}
console.log(cal(add,4,8));
console.log(cal(sub,10,2));

//currying
function subract(a) {
    return function(b) {
        return a-b;
    };
}
console.log(subract(5)(3)); 



