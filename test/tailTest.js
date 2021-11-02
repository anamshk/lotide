const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it('should not return the first value in the array', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});