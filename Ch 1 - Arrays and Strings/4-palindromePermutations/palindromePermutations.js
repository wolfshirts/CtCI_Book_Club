//Given a string, write a function to check if it is a permutations of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.

function palindromePermutations(str) {
  //Coding here is optional, but recommended.
  const seen = {};

  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    if (!seen[str[i]]) {
      seen[str[i]] = 1;
    } else {
      seen[str[i]] += 1;
    }
  }
  let count = 0;
  for (let key in seen) {
    if (count > 1) {
      return false;
    }
    if (seen[key] % 2 !== 0) {
      count += 1;
    }
  }
  return true;
}

console.log(palindromePermutations("boopty scoopty woop"));

module.exports = palindromePermutations;
