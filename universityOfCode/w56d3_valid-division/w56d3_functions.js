/* ****************functions.js*********************** */
function validDivision(str) {
  var arr = str.split("/");
  var dividend = parseInt(arr[0]);
  var divisor = parseInt(arr[1]);
  if (divisor === 0) return "invalid";
  return Number.isInteger(dividend / divisor);
}
module.exports = validDivision;

/* Given Helpful Links
   Number.isInteger()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Remainder (%)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
   function() Constructor
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function
   isFinite()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
*/
