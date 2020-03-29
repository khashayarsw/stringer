var checker = require("./checker");
var convertor = require("./convertor");

module.exports = {
  isUpperCase: checker.isUpperCase,
  isLowerCase: checker.isLowerCase,
  toUpperCase: convertor.toUpperCase,
  toLowerCase: convertor.toLowerCase
};
