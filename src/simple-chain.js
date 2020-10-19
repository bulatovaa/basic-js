const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return chainMaker.length;
  },
  addLink(value) {
    return (value === undefined) ? chainMaker += '(  )' : chainMaker += '( ' + String(value) + ' )';
  },
  removeLink(position) {
    
  },
  reverseChain() {
    
  },
  finishChain() {
    return chainMaker;
  }
};

module.exports = chainMaker;
