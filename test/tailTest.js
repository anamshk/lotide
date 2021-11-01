const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it('should return the last value in the array', () => {
    assert.deepEqual(tail([1, 2, 3]), [3]);
  });
});