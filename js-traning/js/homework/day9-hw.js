const obj = { first: "Priya", last: "Sharma", city: "Jaipur" };
console.log(`${first} ${last} from ${city}`)

const arr = [1,2,3,4,5,6]
const [head,...tail] = arr;
console.log(head)
console.log(tail)

function multiply(...nums) {
    return nums.reduce((a,c) => a*c,1);
}

console.log(multiply(2, 3, 4));  
console.log(multiply(5));        
console.log(multiply()); 

const user = {
  name: "Aarav",
  age: 21,
  city: "Delhi"
};

const updatedUser = {...user,age: 22};
console.log(user);        
console.log(updatedUser)