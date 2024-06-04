/* *****************functions.js********************* */
function evenlyDivisible(a, b, c) {
  var sum = 0;
  for (var i = a; i <= b; i++) {
    if (i % c === 0) {
      sum += i;
    }
  }
  return sum;
}
module.exports = evenlyDivisible;

/* Given Helpful Links
   Remainder (%)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
   for
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Array.prototype.fill()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
*/
