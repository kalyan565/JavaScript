const user = {

    name: "Priya",

    greet() {
        console.log(this.name);
    }
};

user.greet();

const fn = user.greet;

fn();
user.greet.call({ name: "X" });



function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

const arr = [1, 2, 3, 4, 5];
console.log(sum.apply(null, arr));