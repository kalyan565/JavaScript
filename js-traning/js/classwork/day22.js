// const m = new Map();

// m.set("name", "Priya");
// m.set(42, "the answer");
// m.set(true, "a boolean key");

// const userObj = { id: 1 };
// m.set(userObj, "value associated with userObj");   // OBJECT as key — Object can't!

// console.log(m.get("name"));     // "Priya"
// console.log(m.get(userObj));    // "value associated with userObj"
// console.log(m.size);            // 4
// console.log(m.has(42));         // true
// m.delete(42);

// // Initialise from an array of pairs
// const m2 = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);
// console.log(m2.get("a"));       // 1

// // Iterate — preserves insertion order
// for (const [key, value] of m2) {
//   console.log(key, value);
// }


// const obj = { name: "Priya", city: "Jaipur" };

// // Object → Map
// const map = new Map(Object.entries(obj));
// console.log(map.get("name"));    // "Priya"

// // Map → Object (keys must be strings/symbols)
// const back = Object.fromEntries(map);
// console.log(back);                // { name: "Priya", city: "Jaipur" }

// // Map iteration helpers
// for (const key of map.keys())   console.log("key:", key);
// for (const val of map.values()) console.log("val:", val);
// for (const [k, v] of map.entries()) console.log(k, "=", v);

// map.forEach((value, key) => console.log(key, "=", value));   // value FIRST!

const prod = new Map();

    prod.set("pen",20)
    prod.set("book",200)
    prod.set("bag",800)
for(const [item,price] of prod) {
    console.log(`${item} : ${price}`)
}

console.log(prod.has('pen'))
console.log(prod.get('book'))
console.log(prod.size)
prod.delete('pen')
console.log(prod.has('pen'))
console.log(prod.size)

const obj = Object.fromEntries(prod);
console.log(obj)

const toMap = new Map(Object.entries(obj));
console.log(toMap);