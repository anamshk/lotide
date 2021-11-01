const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1, 2, 3, 4, 5, 6]));
let newArray = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(newArray, [3, 4]);