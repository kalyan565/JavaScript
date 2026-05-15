/** Named exports — used by day12-lesson-modules.mjs */
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

export { multiply };

/** Default export — hands-on bonus + usable alongside named exports */
export default function formatPrice(n) {
  return `₹${n}`;
}
