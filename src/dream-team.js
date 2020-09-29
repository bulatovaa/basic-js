const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  let result = '';
  arr.forEach(elem => {
    if (elem === String(elem)) {
      let newElem = elem.split(' ').join('');
      result += newElem[0];
    }
  });
  return result.toUpperCase().split('').sort().join('');
};
