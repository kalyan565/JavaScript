/**
 * Day 12 lesson — Topics 6 & 7 (ES modules). Loaded as type="module" from lesson.html.
 */
import { PI, add, multiply } from "./mathUtils.js";
import { add as sum } from "./mathUtils.js";
import * as math from "./mathUtils.js";
import greet from "./greet.js";
import sayHi from "./greet.js";
import formatPrice, { TAX } from "./priceUtils.js";

console.log("=== Day 12 — Modules (named + default) ===");
console.log("Topic 6 — PI:", PI);
console.log("Topic 6 — add(2, 3):", add(2, 3));
console.log("Topic 6 — multiply(4, 5):", multiply(4, 5));
console.log("Topic 6 — import { add as sum }:", sum(10, 20));
console.log("Topic 6 — import * as math:", math.subtract(9, 4));
console.log("Topic 7 — default greet:", greet("Priya"));
console.log("Topic 7 — default renamed sayHi:", sayHi("Aarav"));
console.log("Topic 7 — mixed:", formatPrice(99), "TAX:", TAX);
