/* **************functions.js**************** */
function warOfNumbers(arr) {
  var odd = 0;
  var even = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even = even + arr[i];
    } else {
      odd = odd + arr[i];
    }
  }
  return even - odd > 0 ? even - odd : odd - even;
}
module.exports = warOfNumbers;

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Math.abs()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
   How to Return Odd Numbers
     - https://stackoverflow.com/questions/45570965/javascript-how-to-return-an-array-with-odd-numbers
   Find Odd Even Numbers Using JavaScript
     - https://www.programiz.com/javascript/examples/even-odd
*/
