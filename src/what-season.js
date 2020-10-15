const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (typeof date !== "object") {
    throw new Error();
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
