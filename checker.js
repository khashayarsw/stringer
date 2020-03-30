function isUpperCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("stringer wants a string!");
  } else {
    return str === str.toUpperCase();
  }
}

function isLowerCase(str) {
  if (typeof str !== "string") {
    throw new TypeError("stringer wants a string!");
  } else {
    return str === str.toLowerCase();
  }
}

module.exports = {
  isUpperCase: isUpperCase,
  isLowerCase: isLowerCase
};
