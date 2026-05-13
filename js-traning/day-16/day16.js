// function whoAmI() {
// console.log(this);
// }
// whoAmI(); 

// const user = { name: "Priya", whoAmI };
// user.whoAmI(); 
// const other = { name: "Aarav", whoAmI };
// other.whoAmI(); 


// function greet(city, lang) {
// console.log(`${this.name} from ${city} speaks ${lang}`);
// }
// const u = { name: "Priya" };
// // call — invoke now, args listed
// greet.call(u, "Jaipur", "Hindi"); // "Priya from Jaipur speaks Hindi"
// // apply — invoke now, args as array
// greet.apply(u, ["Jaipur", "Hindi"]); // same output
// // bind — returns a new function for later
// const greetPriya = greet.bind(u, "Jaipur"); // partially applied: city pre-set
// greetPriya("English"); // "Priya from Jaipur speaks english
// greetPriya("Marathi"); // "Priya from Jaipur speaks Marathi"
// // Once bound, this CANNOT be re-bound
// greetPriya.call({ name: "Aarav" }, "Tamil");


// const user = {
// name: "Priya",

// arrow: () => {
// console.log(user.name); // undefined ← arrow doesn't see user as this
// },
// };

// user.arrow(); 

const user = {
  name: "Priya",

  greet() {
    console.log(this.name);
  }
};   // user.greet() → "Priya"

user.greet();

const g = user.greet.bind(user); // g() → undefined (or error in strict mode)
// const g = user.greet
g(); //  g() fails because the function is called without the user object, 
    // so this becomes undefined