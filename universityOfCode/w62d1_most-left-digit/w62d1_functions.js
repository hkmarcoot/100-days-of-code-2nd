/* **************functions.js**************** */
function leftDigit(str) {
  for (var i = 0; i < str.length; i++) {
    if (/[0-9]/g.test(str[i])) {
      return parseInt(str[i]);
    }
  }
}
module.exports = leftDigit;

/* Given Helpful Links
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   Number Object
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
   Array.prototype.find()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
*/
