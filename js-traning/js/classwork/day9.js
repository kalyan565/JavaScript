const address = `MI Road
Jaipur 302001
Rajasthan`;

console.log(address)


const address1 = `Mi road \n Jaipur 324324 \n Rajsthan`
console.log(address1)

const colors = ["red", "green", "blue"];

const [first, second, third] = colors;
console.log(first, second, third);   


const showInfo = ({ name = "Guest", role = "User", city } = {}) =>
  `${role}: ${name} : ${city}`;
console.log(showInfo());                
console.log(showInfo({ name: "Riya", city : "xyz" })); 
console.log(showInfo({city : "xyz"}))

console.log("--------------------------------------------------------------------------")