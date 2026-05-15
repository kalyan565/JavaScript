/**
 * Task 1 — Click counter (#counter-btn, #count)
 * Bonus: after 10 clicks, button label becomes "Stop clicking!"
 */
const counterBtn = document.querySelector("#counter-btn");
const countSpan = document.querySelector("#count");

let clickCount = 0;
counterBtn.addEventListener("click", () => {
  clickCount += 1;
  countSpan.textContent = String(clickCount);
  if (clickCount >= 10) {
    counterBtn.textContent = "Stop clicking!";
  }
});

/**
 * Task 2 — Live preview (#live-input, #preview) via input
 * Bonus: empty field shows "Start typing..."
 */
const liveInput = document.querySelector("#live-input");
const preview = document.querySelector("#preview");

liveInput.addEventListener("input", (e) => {
  const value = e.target.value;
  preview.textContent = value === "" ? "Start typing..." : value;
});

/**
 * Task 3 — Form submit (#reg-form, #name-field, #welcome)
 * Bonus: empty name → "Please enter your name"
 */
const regForm = document.querySelector("#reg-form");
const nameField = document.querySelector("#name-field");
const welcome = document.querySelector("#welcome");

regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameField.value.trim();
  welcome.textContent =
    name === "" ? "Please enter your name" : `Welcome, ${name}!`;
});

/**
 * Task 4 — Event delegation on #todo-list (one listener, LI only)
 * Bonus: new <li> via createElement; toggles without extra listeners
 */
const todoList = document.querySelector("#todo-list");

todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});

const bonusLi = document.createElement("li");
bonusLi.textContent = "Brand new task";
todoList.appendChild(bonusLi);
