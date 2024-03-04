/* *********************functions.js********************** */
function isValid(str) {
  // Check if it contain number only
  if (!Number.isInteger(Number(str))) return false;
  // Check if string length is 5
  if (str.length != 5) return false;
  // Check if string contains white space
  if (/\s/g.test(str)) return false;
  return true;
}
module.exports = isValid;

// Reference
// https://stackoverflow.com/questions/1731190/check-if-a-string-has-white-space
// https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript

/* Given Helpful Links
   Number.isInteger()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
   RegExp.prototype.test()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
   Array.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
   isNaN()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
   String length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
  */
