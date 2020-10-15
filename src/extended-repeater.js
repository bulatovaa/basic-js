const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  newStr = '';
  for (let i = 1; i <= options.repeatTimes; i++) {
    if (options.separator) {
      newStr += (String(str) + String(options.separator));
    } else if (i !== options.repeatTimes) {
      newStr += (String(str) + '+');
    } else {
      newStr += String(str);
    }
  }
  console.log(newStr);
  return newStr;
};
  