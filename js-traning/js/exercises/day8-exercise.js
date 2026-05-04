//Task 1
const student = {
    name : "Anaya",
    age : 21,
    city : "Jaipur",
    Course : "B.Tech",
    marks : [87,98,99]
}

console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.marks[0]);

console.log("------------------------------------------------------------------------------------")

student.email = "xyz@gmail.com"
student.age = 23
delete(student.city)

console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.marks[0]);

console.log("------------------------------------------------------------------------------------")

//Task 2
const bankAccount = {
    holder : "kalyan",
    balance : 5000,
    deposit(val) {
        this.balance = this.balance + val; 
        return `The updated balance is ${this.balance}`
    },
    withDraw(val) {
        if(this.balance > val) {
            this.balance = this.balance - val;
            return `The remaining balance is ${this.balance}`
        }
        return "Insufficient funds";
    }
};
console.log(bankAccount.deposit(1000));
console.log(bankAccount.withDraw(2000));
console.log(bankAccount.withDraw(10000));

console.log("------------------------------------------------------------------------------------")

//Task 3
const product = { id: 101, name: "Laptop", price: 60000, brand: "Dell", stock: 5 };
const {name, price} = product;
console.log(name)
console.log(price)

const {brand: make}  = product;
console.log(make);

const {warrenty = 'one year'} = product;
console.log(warrenty)


//Bouns
console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student).forEach(([key,value]) => {
    console.log(`${key} : ${value}`);
} ) )

