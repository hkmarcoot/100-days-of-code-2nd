function findWord(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (/^[a-z]+$/g.test(str[i])) {
      newStr = newStr.concat(str[i]);
    }
  }
  return newStr;
}

// Reference:
// https://code.likeagirl.io/regex-to-test-for-lowercase-characters-a51291f52f14

/* Given Helpful Links
 Regex
   - https://www.w3schools.com/jsref/jsref_obj_regexp.asp
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 String.prototype.match()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 Spread syntax (...)
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 String.prototype.toLowerCase
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 How can I test if a letter in a string is uppercase or lowercase?
   - https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip
*/
