const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

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
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
let newArray = [];
newArray = (without(words, ["lighthouse"]));
console.log(words);
assertArraysEqual(newArray, ["hello", "world", "lighthouse"]);

const colour = ["red", "yellow", "blue", "green"];
newArray = without(colour, "blue");
console.log(colour);
assertArraysEqual(newArray, ["red", "yellow", "green"]);