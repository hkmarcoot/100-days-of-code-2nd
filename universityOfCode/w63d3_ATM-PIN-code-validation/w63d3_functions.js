/* **************functions.js**************** */
function validatePIN(str) {
  return /^[0-9]{4}$/g.test(str) || /^[0-9]{6}$/g.test(str);
}
module.exports = validatePIN;

// Reference
// https://stackoverflow.com/questions/7864971/regular-expression-for-number-with-length-of-4-5-or-6

/* Given Helpful Links
   RegExp Constructor
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   RegExp.prototype.test()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
   String.prototype.search()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
   Regex Tester and Debugger
     - https://regex101.com/
   Match specific length x or y
     - https://stackoverflow.com/questions/12784338/match-specific-length-x-or-y
*/
