//There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

function checkInsert(str1, str2) {
  // Iterate the string
}

function oneAway(str1, str2) {
  //take your code, and put it here
  if (str1 === str2) {
    return true;
  }
  // Check if string might be insertable
  if (str1.length > str2.length || str2.length > str1.length) {
    return checkInsert(str1, str2);
  }
}

module.exports = oneAway;
