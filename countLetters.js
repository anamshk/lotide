const countLetters = function(string) {
  const result = {};

  for (let letter in string) {
    result[string[letter]] = (result [string[letter]] || 0) + 1;
  }
  return result;
  
};
console.log(countLetters("lighthouse in the house"));