/**
 * Task 1 — Build a student object
 * name Anaya, age 21, city Jaipur, course B.Tech, marks (3 numbers).
 * Log student, name, age, first mark. Add email, set age 22, delete city, log again.
 */
const student = {
  name: "Anaya",
  age: 21,
  city: "Jaipur",
  course: "B.Tech",
  marks: [85, 90, 88],
};

console.log("Task 1 — student:", student);
console.log("Task 1 — name, age, first mark:", student.name, student.age, student.marks[0]);

student.email = "anaya@example.com";
student.age = 22;
delete student.city;

console.log("Task 1 — after add/update/delete:", student);

/**
 * Task 2 — bankAccount with methods (this)
 * holder Aarav, balance 5000. deposit(amount), withdraw(amount) with insufficient funds.
 * Test: deposit 1000, withdraw 2000, withdraw 10000.
 */
const bankAccount = {
  holder: "Aarav",
  balance: 5000,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return this.balance;
    }
    return "Insufficient funds";
  },
};

console.log("Task 2 — deposit 1000 →", bankAccount.deposit(1000));
console.log("Task 2 — withdraw 2000 →", bankAccount.withdraw(2000));
console.log("Task 2 — withdraw 10000 →", bankAccount.withdraw(10000));

/**
 * Task 3 — Destructuring product
 * Destructure name and price; brand as make; warranty default "1 year".
 */
const product = {
  id: 101,
  name: "Laptop",
  price: 60000,
  brand: "Dell",
  stock: 5,
};

const { name, price } = product;
console.log("Task 3 — name, price:", name, price);

const { brand: make } = product;
console.log("Task 3 — brand as make:", make);

const { warranty = "1 year" } = product;
console.log("Task 3 — warranty (default):", warranty);

/**
 * Bonus — on student (after Task 1 edits): Object.keys, Object.values, Object.entries, count.
 */
console.log("Bonus — keys:", Object.keys(student));
console.log("Bonus — values:", Object.values(student));
Object.entries(student).forEach(([key, value]) => {
  console.log(`Bonus — ${key}: ${value}`);
});
console.log("Bonus — property count:", Object.keys(student).length);
