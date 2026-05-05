const item = "laptop"
const price = 60000;
const tax  = 0.18 
const str = `The ${item} costs ${60000} + ${10800} GST = ${price+10800}`
console.log(str)

const scores = [88, 75, 92, 60, 45];

const [top, second, ...others] = scores;
console.log(top)
console.log(second)
console.log(others)

const user = { name: "Anaya", age: 21, address: { city: "Jaipur", pincode: "302001" } };
const {name, age : userage , address : {city}} = user;
console.log(name,userage,city)

function sumAll(...numbers) {
    return numbers.reduce((a,c) => a+c , 0);
}
console.log(sumAll(1, 2, 3))
console.log(sumAll(10, 20, 30))
console.log(sumAll())

function joinNames(seperator, ...names) {
    return names.join(seperator);
}

console.log(joinNames(", ","priya","arav","kumar"));

const defaults = { theme: "light", lang: "en", notifications: true };
const userPrefs = { theme: "dark", fontSize: 16 };
const merged = {...defaults,...userPrefs}
console.log(merged)


function applyprefs(defaults,prefs) {
    return {...defaults,...prefs}
}
console.log(applyprefs(defaults,userPrefs))