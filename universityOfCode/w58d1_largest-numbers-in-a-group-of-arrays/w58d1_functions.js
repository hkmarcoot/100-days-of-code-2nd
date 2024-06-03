/* *****************functions.js********************* */
function findLargestNums(arr) {
  var newArr = arr.map((x) => Math.max(...x));
  return newArr;
}
module.exports = findLargestNums;

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Math.max()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
   Spread Syntax
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   push() Method
     - https://www.w3schools.com/jsref/jsref_push.asp
   Function.prototype.apply()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
