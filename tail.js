const tail = function(array) {
  let newArray = array.slice(-1);
  return newArray;

};

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// (result.length, 2); // ensure we get back two elements
// (result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// (result[1], "Labs");

module.exports = tail;
