// 1 — Book object; title via bracket + variable key
const book = {
  title: "The Guide",
  author: "R.K. Narayan",
  year: 1958,
  pages: 224,
  summary() {
    return `${this.title} by ${this.author} (${this.year})`;
  },
};

const titleKey = "title";
console.log("1 — title with bracket + variable:", book[titleKey]);

// 2 — summary() uses this + template literal
console.log("2 — summary():", book.summary());

// 3 — Object.entries + forEach on any object
const inventory = { sku: "A12", qty: 40, zone: "North" };
Object.entries(inventory).forEach(([key, value]) => {
  console.log(`3 — ${key}: ${value}`);
});

// 4 — Shallow copy with spread; change copy; original unchanged
const bookCopy = { ...book };
bookCopy.title = "A Different Title";
bookCopy.pages = 999;

console.log("4 — original title:", book.title, "pages:", book.pages);
console.log("4 — copy title:", bookCopy.title, "pages:", bookCopy.pages);
