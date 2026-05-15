/**
 * Day 10 — DOM Manipulation Basics (lesson.js)
 * Run in the browser on lesson.html. In Node, `document` is missing — we log and exit.
 */
(function day10Lesson() {
  if (typeof document === "undefined") {
    console.log(
      "Day 10: Open day-10/html/lesson.html in a browser — there is no `document` in Node."
    );
    return;
  }

  const host = document.createElement("section");
  host.id = "day10-lesson-sandbox";
  host.setAttribute("aria-label", "DOM lesson demo");
  host.style.cssText =
    "margin:1rem;padding:1rem;border:2px dashed #94a3b8;border-radius:8px;font-family:system-ui,sans-serif;";
  host.innerHTML = `
    <p style="margin:0 0 0.75rem;font-size:0.85rem;opacity:0.85;">Live DOM demos (injected by lesson.js)</p>
    <h2 id="day10-title">Hello</h2>
    <p id="day10-text-demo"></p>
    <p id="day10-html-demo"></p>
    <nav><a href="#" class="active">Nav link</a><a href="#">Other</a></nav>
    <p>
      <button type="button" class="btn">Button A</button>
      <button type="button" class="btn">Button B</button>
    </p>
    <ul id="day10-todo-list"></ul>
    <div id="day10-cards"></div>
  `;
  document.body.appendChild(host);

  const title = document.getElementById("day10-title");
  const textDemo = document.getElementById("day10-text-demo");
  const htmlDemo = document.getElementById("day10-html-demo");
  const list = document.getElementById("day10-todo-list");
  const cards = document.getElementById("day10-cards");

  /**
   * Topic 1 — What is the DOM?
   * Browser parses HTML → tree of objects in memory. JS changes the tree → re-render. Root: document.
   */
  console.log(
    "Topic 1 - DOM: Document Object Model — tree of nodes. Root is `document`."
  );
  console.log("Topic 1 - document.documentElement tag:", document.documentElement.tagName);

  /**
   * Topic 2 — Selecting elements
   * Prefer querySelector (CSS selectors). querySelectorAll returns NodeList (forEach ok; use [...] for array methods).
   */
  const byId = document.getElementById("day10-title");
  const heading = host.querySelector("h2");
  const firstBtn = host.querySelector(".btn");
  const idMatch = host.querySelector("#day10-title");
  const nested = host.querySelector("nav a.active");
  const allBtns = host.querySelectorAll(".btn");
  console.log("Topic 2 - getElementById / querySelector match:", byId === heading);
  console.log("Topic 2 - first .btn text:", firstBtn && firstBtn.textContent);
  console.log("Topic 2 - nested nav a.active:", nested && nested.textContent);
  allBtns.forEach((b) => console.log("Topic 2 - button:", b.textContent));
  const btnArray = [...host.querySelectorAll(".btn")];
  console.log("Topic 2 - [...NodeList] map:", btnArray.map((b) => b.textContent));

  /**
   * Topic 3 — textContent vs innerHTML
   * textContent = plain text (safe). innerHTML parses HTML (never with untrusted user input — XSS).
   */
  console.log("Topic 3 - title textContent read:", title.textContent);
  title.textContent = "Welcome, Priya!";
  console.log("Topic 3 - after textContent write:", title.textContent);

  textDemo.textContent = "<em>Hi</em>";
  console.log(
    "Topic 3 follow - textContent with tags shows raw:",
    textDemo.textContent
  );

  htmlDemo.innerHTML = "<em>Hi</em>";
  console.log(
    "Topic 3 follow - innerHTML parses tags; textContent read:",
    htmlDemo.textContent
  );

  const safeLine = document.createElement("p");
  safeLine.textContent = "<img src=x onerror=alert('hacked')>";
  host.appendChild(safeLine);
  console.log(
    "Topic 3 - malicious string via textContent (safe, no script run):",
    safeLine.textContent.slice(0, 40) + "..."
  );
  safeLine.remove();

  /**
   * Topic 4 — Modifying styles and classList
   * Prefer classList + CSS file; inline style is quick for demos.
   */
  title.style.color = "crimson";
  title.style.backgroundColor = "lemonchiffon";
  title.style.fontSize = "1.25rem";
  title.classList.add("highlight");
  title.classList.remove("dim");
  title.classList.toggle("active");
  console.log("Topic 4 - classList.contains('active'):", title.classList.contains("active"));

  /**
   * Topic 5 — Creating elements
   * createElement → configure → appendChild / prepend / append
   */
  const li = document.createElement("li");
  li.textContent = "Buy milk";
  li.classList.add("todo-item");
  li.id = "day10-todo-1";
  list.appendChild(li);

  const li2 = document.createElement("li");
  li2.textContent = "Walk the dog";
  list.prepend(li2);

  /**
   * Topic 6 — Removing elements
   */
  const toRemove = document.getElementById("day10-todo-1");
  if (toRemove) toRemove.remove();
  console.log("Topic 6 - removed #day10-todo-1; list children:", list.children.length);

  list.innerHTML = "";
  console.log("Topic 6 - cleared list with innerHTML = \"\" (children:", list.children.length, ")");

  /** Optional: build a small card (ties to creating nested nodes) */
  const product = { name: "Laptop", price: 60000, brand: "Dell" };
  const card = document.createElement("div");
  card.classList.add("card");
  const h3 = document.createElement("h3");
  h3.textContent = product.name;
  const brandP = document.createElement("p");
  brandP.textContent = product.brand;
  const priceSpan = document.createElement("span");
  priceSpan.textContent = String(product.price);
  card.append(h3, brandP, priceSpan);
  cards.appendChild(card);
})();
