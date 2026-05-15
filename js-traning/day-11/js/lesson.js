/**
 * Day 11 — Events & Event Handling (lesson.js)
 * Open day-11/html/lesson.html in a browser. In Node there is no `document`.
 */
(function day11Lesson() {
  if (typeof document === "undefined") {
    console.log(
      "Day 11: Open day-11/html/lesson.html in a browser — no `document` in Node."
    );
    return;
  }

  const host = document.createElement("section");
  host.id = "day11-lesson-sandbox";
  host.setAttribute("aria-label", "Events lesson demo");
  host.style.cssText =
    "margin:1rem;padding:1rem;border:2px dashed #94a3b8;border-radius:8px;font-family:system-ui,sans-serif;";
  host.innerHTML = `
    <p style="margin:0 0 0.75rem;font-size:0.85rem;opacity:0.85;">Try controls here; watch the console (F12).</p>
    <h3>Topic 1–2: Button</h3>
    <button type="button" id="day11-my-btn">My button</button>
    <h3>Topic 2: Input</h3>
    <input id="day11-name-input" type="text" placeholder="Type a name…" style="width:min(100%,220px)" />
    <h3>Topic 3: Form & link</h3>
    <form id="day11-login-form" style="margin:8px 0;">
      <input name="user" placeholder="user" />
      <button type="submit">Submit</button>
    </form>
    <a href="https://example.com" id="day11-link" style="display:inline-block;margin:8px 0;">Example link</a>
    <h3>Topic 4: Mouse box</h3>
    <div id="day11-box" style="width:140px;min-height:72px;padding:10px;background:#e2e8f0;border-radius:6px;cursor:default;">Box</div>
    <h3>Topic 5: Search</h3>
    <input id="day11-search" type="text" placeholder="Search…" style="width:min(100%,220px)" />
    <h3>Topic 6: Todo (delegation)</h3>
    <ul id="day11-todo-list" style="padding-left:1.25rem;">
      <li data-id="1">Buy milk</li>
      <li data-id="2">Walk dog</li>
      <li data-id="3">Pay bills</li>
    </ul>
  `;
  document.body.appendChild(host);

  const btn = host.querySelector("#day11-my-btn");
  const nameInput = host.querySelector("#day11-name-input");
  const form = host.querySelector("#day11-login-form");
  const link = host.querySelector("#day11-link");
  const box = host.querySelector("#day11-box");
  const search = host.querySelector("#day11-search");
  const list = host.querySelector("#day11-todo-list");

  /**
   * Topic 1 — addEventListener
   * Pattern: element.addEventListener("eventName", fn). Multiple listeners run.
   * removeEventListener needs the SAME function reference — use a named function, not an inline arrow.
   */
  btn.addEventListener("click", () => {
    console.log("Topic 1 - Button clicked! (first handler)");
  });
  btn.addEventListener("click", () => {
    console.log("Topic 1 - Second handler also fires");
  });

  function lessonNamedClick() {
    console.log("Topic 1 - Named handler (then removed)");
  }
  btn.addEventListener("click", lessonNamedClick);
  btn.removeEventListener("click", lessonNamedClick);

  /**
   * Topic 2 — The event object
   * e.type, e.target, e.target.value, e.clientX/Y, e.key
   */
  btn.addEventListener("click", (e) => {
    console.log("Topic 2 - e.type:", e.type);
    console.log("Topic 2 - e.target:", e.target);
    console.log("Topic 2 - e.target.textContent:", e.target.textContent);
    console.log("Topic 2 - e.clientX, e.clientY:", e.clientX, e.clientY);
  });

  nameInput.addEventListener("input", (e) => {
    console.log("Topic 2 - User typed (input):", e.target.value);
  });

  function sandboxKeydown(e) {
    if (!host.contains(e.target) && e.target !== document.body) return;
    console.log("Topic 2 follow - keydown key:", e.key);
  }
  document.addEventListener("keydown", sandboxKeydown);

  /**
   * Topic 3 — preventDefault (stop built-in: submit, navigate, context menu)
   */
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Topic 3 - form submit prevented (no page reload)");
  });

  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Topic 3 - link click prevented (no navigation)");
  });

  /**
   * Topic 4 — Mouse events
   */
  box.addEventListener("click", () => console.log("Topic 4 - click"));
  box.addEventListener("dblclick", () => console.log("Topic 4 - dblclick"));
  box.addEventListener("mouseover", () => box.classList.add("hover"));
  box.addEventListener("mouseout", () => box.classList.remove("hover"));
  box.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log("Topic 4 - right-click at", e.clientX, e.clientY);
  });

  /**
   * Topic 5 — Keyboard: input (live value), keydown (which key; old value caveat)
   */
  search.addEventListener("input", (e) => {
    console.log("Topic 5 - input value now:", e.target.value);
  });

  search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      console.log("Topic 5 - Enter → search:", e.target.value);
    }
    if (e.key === "Escape") {
      e.target.value = "";
      console.log("Topic 5 - Escape cleared field");
    }
  });

  document.addEventListener(
    "keydown",
    (e) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        console.log("Topic 5 - Ctrl+S: custom save (default save dialog blocked)");
      }
    },
    { capture: true }
  );

  /**
   * Topic 6 — Delegation: one listener on parent; e.target; works for new children
   */
  list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("done");
      console.log("Topic 6 - toggled item", e.target.dataset.id);
    }
  });

  const newLi = document.createElement("li");
  newLi.textContent = "Brand new task";
  newLi.dataset.id = "4";
  list.appendChild(newLi);
  console.log(
    "Topic 6 - appended new <li> — delegation handles it with no extra listeners"
  );
})();
