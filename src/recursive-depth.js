const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    

    let result = 1;

    arr.forEach(elem => {
      if (elem instanceof Array) {
        result += 1;
        
      }
    });
    return result + calculateDepth(arr.flat());
  }
};