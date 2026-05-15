/**
 * Task 1 — Random RGB background (Math.random per channel)
 */
const colorBtn = document.querySelector("#color-change");

colorBtn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = color;
});

/**
 * Task 2 — Red if value length is under 3 chars, green otherwise (input event)
 */
const liveInput = document.querySelector("#less");

liveInput.addEventListener("input", (e) => {
  const el = e.target;
  el.style.backgroundColor = el.value.length < 3 ? "red" : "green";
});

/**
 * Task 3 — Two number fields; on submit (preventDefault) show sum below
 */
const sumForm = document.querySelector("#sum-form");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sumOutput = document.querySelector("#below");

sumForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const a = Number(num1.value);
  const b = Number(num2.value);
  sumOutput.textContent = `Sum: ${a + b}`;
});

/**
 * Task 4 — Delegation: one listener on list; click LI logs its text.
 * Sixth item appended — still works without new listeners.
 */
const logList = document.querySelector("#hw-log-list");

logList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

const sixth = document.createElement("li");
sixth.textContent = "Foxtrot (added dynamically)";
logList.appendChild(sixth);
