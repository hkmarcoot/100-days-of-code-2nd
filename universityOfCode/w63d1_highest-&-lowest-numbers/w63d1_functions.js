/* **************functions.js***************** */
function highLow(str) {
  var arr = str.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
module.exports = highLow;

// Reference
// https://stackoverflow.com/questions/30916837/return-highest-and-lowest-number-in-a-string-of-numbers-with-spaces

/* Given Helpful Links
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Math.max()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
   Math.min()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   Spread Syntax
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   Template Literals (template strings)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/
