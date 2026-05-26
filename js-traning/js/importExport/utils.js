export function formatPrice(p) { return `₹${p}`; }
export function gst(p, rate = 18) { return p * rate / 100; }
export const TAX_RATE = 18;