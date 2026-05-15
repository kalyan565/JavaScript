/**
 * Task 1 — safeParse(str): try JSON.parse; on failure log and return null
 */
function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    console.log("Invalid JSON:", err.message);
    return null;
  }
}

console.log("Task 1 — valid:", safeParse('{"name":"Priya"}'));
console.log("Task 1 — broken:", safeParse('{"name":"Priya"'));

/**
 * Task 2 — setAge(age): throw Error for bad type or range; try/catch per test
 */
function setAge(age) {
  if (typeof age !== "number") {
    throw new Error("Age must be a number");
  }
  if (age < 0 || age > 120) {
    throw new Error("Age must be 0–120");
  }
  return age;
}

function trySetAge(label, age) {
  try {
    console.log(`Task 2 — ${label}:`, setAge(age));
  } catch (err) {
    console.log(`Task 2 — ${label}:`, err.message);
  }
}

trySetAge("setAge(25)", 25);
trySetAge('setAge("twenty")', "twenty");
trySetAge("setAge(200)", 200);

/**
 * Task 3 — ValidationError + validateEmail; instanceof in catch
 */
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Invalid email");
  }
  return email;
}

function tryValidateEmail(label, email) {
  try {
    console.log(`Task 3 — ${label}:`, validateEmail(email));
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log(`Task 3 — ${label}: validation failed —`, err.message);
    } else {
      throw err;
    }
  }
}

tryValidateEmail("priya@example.com", "priya@example.com");
tryValidateEmail("priya-no-at", "priya-no-at");

console.log(
  "Task bonus — see ../js/app.js (module) for PI, add, multiply, formatPrice."
);
