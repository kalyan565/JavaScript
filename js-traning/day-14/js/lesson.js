function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const cnt1 = makeCounter();
const cnt2 = makeCounter();

console.log(cnt1());
console.log(cnt1());

console.log(cnt1());
console.log(cnt1());

console.log(cnt2());
console.log(cnt2());

console.log(cnt1())