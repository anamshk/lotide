const without = function(source, itemsToRemove) {
  const newArray = [];
  for( var i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
    newArray.push(source[i])
    }
  }
 return newArray
};

const eqArrays = function(left, right) {
  if (left.length !== right.length) {
    return false
  }
  for (var i = 0; i < left.length; i++) {
    if (without(left[i], right[i])) {
      return false;
     } 
  }
  return true
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
 // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const colour = ["red", "yellow", "blue", "green"]
console.log(without(colour, "blue"))
console.log(colour)
assertArraysEqual(colour, ["red", "yellow", "green"])