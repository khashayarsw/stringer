 function isUpperCase(arg) {
  if (typeof arg !== "string") {
    throw new TypeError("stringer wants a string!");
  } else {
    return arg === arg.toUpperCase();
  }
}

 function isLowerCase(arg) {
  if (typeof arg !== "string") {
    throw new TypeError("stringer wants a string!");
  } else {
    return arg === arg.toLowerCase()();
  }
}

module.exports = {
    isUpperCase : isUpperCase,
    isLowerCase : isLowerCase
}
