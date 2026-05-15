/**
 * Day 12 — Error Handling & Module Basics (lesson.js)
 * Run in the browser via day-12/html/lesson.html, or: node day-12/js/lesson.js
 * Topics 6–7 (import/export) run from day12-lesson-modules.mjs in the browser.
 */
(function day12Lesson() {
  console.log("=== Day 12 — Error Handling & Module Basics ===");

  /**
   * Topic 1 — Error types: syntax (parse time), runtime (try/catch), logic (tests)
   */
  console.log("\nTopic 1 — Syntax vs runtime vs logic");
  console.log(
    "Syntax: rejected at parse time — the file will not run (e.g. missing bracket)."
  );
  console.log(
    "Runtime: thrown while running — try/catch can handle (e.g. null.foo)."
  );
  console.log("Logic: runs but wrong answer — needs testing, not try/catch.");
  const averageBug = (a, b) => a + b / 2;
  const averageFixed = (a, b) => (a + b) / 2;
  console.log(
    "Logic bug — average(10, 20) with wrong formula:",
    averageBug(10, 20),
    "(expected 15)"
  );
  console.log("Corrected:", averageFixed(10, 20));

  /**
   * Topic 2 — try / catch / finally
   */
  console.log("\nTopic 2 — try / catch");
  try {
    JSON.parse('{"name":"Priya"');
  } catch (err) {
    console.log("Topic 2 — Couldn't parse:", err.message);
  }
  console.log("Topic 2 — App keeps running");

  function readConfig(raw) {
    try {
      return JSON.parse(raw);
    } catch (err) {
      console.log("Topic 2 — Falling back to defaults");
      return { theme: "light" };
    } finally {
      console.log("Topic 2 — Config attempt finished");
    }
  }
  readConfig("{not valid json}");

  try {
    JSON.parse("{bad");
  } catch (e) {
    console.log("Topic 2 — follow-along: oops");
  }
  console.log("Topic 2 — follow-along: done");

  /**
   * Topic 3 — Error object: message, name, stack; branch on kind
   */
  console.log("\nTopic 3 — err.message, err.name, err.stack");
  try {
    null.foo;
  } catch (err) {
    console.log("Topic 3 — message:", err.message);
    console.log("Topic 3 — name:", err.name);
    console.log("Topic 3 — stack (first line):", err.stack.split("\n")[0]);
  }

  try {
    null.foo;
  } catch (err) {
    if (err.name === "TypeError") {
      console.log("Topic 3 — branch: fix the data shape (TypeError)");
    } else if (err.name === "SyntaxError") {
      console.log("Topic 3 — branch: fix the input format (SyntaxError)");
    } else {
      console.log("Topic 3 — branch: something else:", err.message);
    }
  }

  try {
    JSON.parse("not-json");
  } catch (err) {
    if (err.name === "SyntaxError") {
      console.log("Topic 3 — branch: JSON SyntaxError");
    } else {
      console.log("Topic 3 — branch:", err.name);
    }
  }

  /**
   * Topic 4 — throw new Error (not plain strings)
   */
  function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be numbers");
    }
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  console.log("\nTopic 4 — throw / catch divide()");
  try {
    console.log("Topic 4 — divide(10, 2):", divide(10, 2));
    console.log("Topic 4 — divide(10, 0):", divide(10, 0));
  } catch (err) {
    console.log("Topic 4 — Caught:", err.message);
  }

  /**
   * Topic 5 — Custom Error subclass + instanceof
   */
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  function setEmail(email) {
    if (!email.includes("@")) {
      throw new ValidationError("Invalid email format");
    }
    return email;
  }

  console.log("\nTopic 5 — ValidationError");
  try {
    setEmail("priya-no-at-sign");
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log("Topic 5 — Validation failed:", err.message);
    } else {
      throw err;
    }
  }

  console.log(
    "\nTopic 6–7 — Named/default exports: see day12-lesson-modules.mjs (browser console)."
  );
})();
