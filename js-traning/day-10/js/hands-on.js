/**
 * Task 1 — Select and change text (#title)
 */
const title = document.querySelector("#title");
title.textContent = "Hello, Kalyan!";
title.style.color = "crimson";
title.style.fontFamily = "Georgia, serif";

/**
 * Task 2 — Toggle dark theme on body (run twice — observe flip; no click handler yet)
 */
const themeBtn = document.querySelector("#theme-btn");
console.log("Task 2 — theme button element:", themeBtn);

document.body.classList.toggle("dark");
document.body.classList.toggle("dark");
console.log(
  "Task 2 — body has class 'dark' after two toggles:",
  document.body.classList.contains("dark")
);

/**
 * Task 3 — Build list from names (bonus: "index. name" via template literal)
 */
const names = ["Priya", "Aarav", "Riya", "Kabir"];
const nameList = document.querySelector("#names-list");

names.forEach((name, index) => {
  const li = document.createElement("li");
  li.textContent = `${index + 1}. ${name}`;
  li.classList.add("name-item");
  nameList.appendChild(li);
});

/**
 * Bonus — Product card in #cards
 */
const product = { name: "Laptop", price: 60000, brand: "Dell" };
const cards = document.querySelector("#cards");

const card = document.createElement("div");
card.classList.add("card");

const cardTitle = document.createElement("h3");
cardTitle.textContent = product.name;

const brand = document.createElement("p");
brand.textContent = product.brand;

const priceSpan = document.createElement("span");
priceSpan.textContent = `₹${product.price}`;

card.append(cardTitle, brand, priceSpan);
cards.appendChild(card);
