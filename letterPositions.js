const letterPositions = function(sentence) {
  let result =  {};
  for (let i = 0; i < sentence.length; i++) {
    if (result[sentence[i]]) {
      console.log(sentence[i]);
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
  return result;
};
	
let helloPositions = letterPositions("hello");
console.log(helloPositions);


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
    console.log(`😔 , Assertion Failed: ${actual}, !==, ${expected}`);
  } else {
    console.log(`🙂 , Assertion Passed: ${actual}, ===, ${expected}`);
  }

};
assertArraysEqual(letterPositions("hello").h, [0]);