/**
 * Task 1 — Add a <p>, then change its text three ways
 * 1) textContent  2) innerHTML with <strong>  3) textContent plain again
 */
const hwStage = document.querySelector("#homework-demo");
const existingP = document.getElementById("homework-dynamic-p");
if (existingP) existingP.remove();

const p = document.createElement("p");
p.id = "homework-dynamic-p";
hwStage.prepend(p);

p.textContent = "Step 1: plain text via textContent.";
p.innerHTML = 'Step 2: innerHTML with <strong>bold emphasis</strong>.';
p.textContent = "Step 3: back to plain text (no parsed tags).";

/**
 * Task 2 — Five <li> items in HTML; add class "even" to even indices (0, 2, 4)
 */
const items = document.querySelectorAll("#items li");
items.forEach((item, index) => {
  if (index % 2 === 0) {
    item.classList.add("even");
  }
});

/**
 * Task 3 — Button via createElement, id + class, append to body
 */
if (!document.getElementById("homework-click-btn")) {
  const hwButton = document.createElement("button");
  hwButton.type = "button";
  hwButton.textContent = "Click me";
  hwButton.id = "homework-click-btn";
  hwButton.classList.add("homework-btn");
  document.body.appendChild(hwButton);
}

/**
 * Task 4 — Three product cards from an array
 */
const products = [
  { name: "Laptop", price: 60000 },
  { name: "Phone", price: 25000 },
  { name: "Tablet", price: 18000 },
];

const productsEl = document.querySelector("#products");
productsEl.innerHTML = "";

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("homework-card");

  const title = document.createElement("h3");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `₹${product.price}`;

  card.append(title, price);
  productsEl.appendChild(card);
});
