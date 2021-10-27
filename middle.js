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

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`😔 , Assertion Failed:, ${actual}, !==, ${expected}`);
  } else {
    console.log(`🙂 , Assertion Passed:, ${actual}, ===, ${expected}`);
  }

};

const middle = function(array) {
  const newArray = [];
  if (array.length <= 2) {
    return newArray;
  }
  const mid = array.length / 2;
  if (array.length % 2 !== 0) {
    newArray.push(array[Math.floor(mid)]);
    return newArray;
  } else {
    newArray.push(array[mid - 1]);
    newArray.push(array[mid]);
    return newArray;
  }
};
console.log(middle([1, 2, 3, 4, 5, 6]));
let newArray = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(newArray, [3]);
