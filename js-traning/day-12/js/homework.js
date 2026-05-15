/**
 * Task 1 — safeDivide(a, b): throws on division by zero; callers use try/catch
 */
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function trySafeDivide(label, a, b) {
  try {
    console.log(`Task 1 — ${label}:`, safeDivide(a, b));
  } catch (err) {
    console.log(`Task 1 — ${label}:`, err.message);
  }
}

trySafeDivide("12 / 4", 12, 4);
trySafeDivide("10 / 0", 10, 0);
trySafeDivide("9 / 3", 9, 3);

/**
 * Task 2 — NotFoundError + getUserById; instanceof in catch
 */
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}

function getUserById(id) {
  if (id !== 1 && id !== 2 && id !== 3) {
    throw new NotFoundError(`No user with id ${id}`);
  }
  return { id, name: `User ${id}` };
}

function tryGetUser(label, id) {
  try {
    console.log(`Task 2 — ${label}:`, getUserById(id));
  } catch (err) {
    if (err instanceof NotFoundError) {
      console.log(`Task 2 — ${label} (NotFoundError):`, err.message);
    } else {
      throw err;
    }
  }
}

tryGetUser("id 2", 2);
tryGetUser("id 99", 99);
tryGetUser("id 1", 1);

console.log(
  "Tasks 3–4 — calculator modules: ../js/homework/calc.js + ../js/homework/app.js"
);
