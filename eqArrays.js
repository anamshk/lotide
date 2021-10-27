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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂 , Assertion Passed:, ${actual}, ===, ${expected}`);
  } else {
    console.log(`😔 , Assertion Failed:, ${actual}, !==, ${expected}`);
  }

};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
