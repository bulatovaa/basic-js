const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(String(value));
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position < 0 || position >= this.arr.length) {
      this.arr = [];
      throw Error;
    }
    this.arr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    const result = this.arr.join(' )~~( ');
    this.arr = [];
    return `( ${result} )`;
  },
};

module.exports = chainMaker;
