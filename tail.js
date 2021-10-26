const tail = function(array) {
  if (array.length <= 1) {
    return []
  } else {
    let newArray = array.splice (1, array.length);
    return newArray
  }  
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂 , Assertion Passed:, ${actual}, ===, ${expected}`);
  } else {
    console.log(`😔 , Assertion Failed:, ${actual}, !==, ${expected}`);
  }
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs")