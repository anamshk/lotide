const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🙂 , Assertion Passed:, ${actual}, ===, ${expected}`);
  } else {
    console.log(`😔 , Assertion Failed:, ${actual}, !==, ${expected}`);
  }

};


const findKeyByValue = function(obj, firstValue) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (firstValue === obj[key]) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);