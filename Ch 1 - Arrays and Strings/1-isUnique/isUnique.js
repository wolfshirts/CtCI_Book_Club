//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  //code
  return new setInterval(str.split("")).size === str.length;
}

module.exports = isUnique;
