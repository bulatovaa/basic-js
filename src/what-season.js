const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if (typeof date !== 'object' && date === null) {
    throw Error;
  }

  const month = date.getUTCMonth();
  if (month >= 0 && month < 2 || month === 11) {
    return 'winter';
  }
  if (month >= 2 && month < 5) {
    return 'spring';
  }
  if (month > 4 && month < 8) {
    return 'summer';
  }
  if (month > 7 && month < 11) {
    return 'fall';
  }
};
