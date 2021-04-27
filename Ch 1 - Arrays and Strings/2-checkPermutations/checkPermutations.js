//Given two strings, write a method to decide if one is a permutation of the other.

const checkPermutations = (str1, str2) => {
  const first = new Set(str1.split(""));
  const second = new Set(str2.split(""));
  if (first.size !== second.size) {
    return false;
  }
  for (let char of first) {
    if (!second.has(char)) {
      return false;
    }
  }
  return true;
};

module.exports = checkPermutations;
