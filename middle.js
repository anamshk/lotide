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

module.exports = middle;
