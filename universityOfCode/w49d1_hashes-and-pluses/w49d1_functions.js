/* **********************functions.js************************ */
function hashPlusCount(str) {
  var hash = 0;
  var plus = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "#") {
      hash++;
    } else if (str[i] === "+") {
      plus++;
    }
  }
  return [hash, plus];
}
module.exports = hashPlusCount;

/* Given Helpful Links
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   string.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   Spread Syntax
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  */
