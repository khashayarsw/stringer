function toUpperCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("stringer wants a string!");
  }
  return str.toUpperCase();
}

function toLowerCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("stringer wants a string!");
  }
  return str.toLowerCase();
}

module.exports = {
  toLowerCase: toLowerCase,
  toUpperCase: toUpperCase
};
