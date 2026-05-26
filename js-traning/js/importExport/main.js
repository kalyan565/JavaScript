import { formatPrice, gst, TAX_RATE } from "./utils.js";

import { formatPrice as fp } from "./utils.js";
fp(100);

// Rename on export
export { formatPrice as format } from "./utils.js";

// Namespace import — pull EVERYTHING under one object
import * as utils from "./utils.js";
console.log(utils.formatPrice(100));
console.log(utils.gst(100));
console.log(utils.TAX_RATE);