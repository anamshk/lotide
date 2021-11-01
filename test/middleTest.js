// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// console.log(middle([1, 2, 3, 4, 5, 6]));
// let newArray = middle([1, 2, 3, 4, 5, 6]);
// assertArraysEqual(newArray, [3, 4]);

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5] if array length is odd", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns 3, 4 for [1, 2, 3, 4, 5, 6] if array length is even", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});