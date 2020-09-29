const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let result = 0;
  for (let subArr of arr) {
    for (let item of subArr) {
      if (item === '^^') {
        result += 1;
      }
    }
  }
  return result;
};
