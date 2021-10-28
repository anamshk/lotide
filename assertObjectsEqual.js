const eqArrays = function(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
};
const eqObjects = function(object1, object2) {
  const keys = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys.length !== keys2.length) {
    return false;
  }
  for (let i of keys) {
    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      if (!eqArrays(object1[i] === object2[i])) {
        return false;
      }
    } else {
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`😔 , Assertion Failed:, ${inspect(actual)}, !==, ${inspect(expected)}`);
  } else {
    console.log(`🙂 , Assertion Passed:, ${inspect(actual)}, ===, ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true


const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);