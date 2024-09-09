/* ************functions.js************** */
function filterArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result.push(arr[i]);
    }
  }
  return result;
}
module.exports = filterArray;

// Reference
// https://www.shecodes.io/athena/92427-how-to-check-if-a-value-is-a-number-in-javascript

/* Given Helpful Links
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   typeof Operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
   Number.isInteger()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
   Converting Strings to Numbers With Vanilla
     - https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
*/
