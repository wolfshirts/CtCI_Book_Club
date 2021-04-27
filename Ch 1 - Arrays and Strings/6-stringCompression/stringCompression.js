//Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(str) {
  //I'd put the code here
  let lastChar = str[0];
  let compressed = "";
  let counter = 1;
  let result = "";

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== lastChar) {
      result += "" + lastChar + counter;
      lastChar = str[i];
      counter = 1;
    } else {
      counter += 1;
      lastChar = str[i];
    }
  }
  result += "" + lastChar + counter;
  return result.length < str.length ? result : str;
}

module.exports = stringCompression;
