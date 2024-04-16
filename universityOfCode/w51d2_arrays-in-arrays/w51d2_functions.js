/* *****************functions.js*********************** */
function numOfSubbarrays(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result++;
    }
  }
  return result;
}
module.exports = numOfSubbarrays;

/* Given Helpful Links
   Array.isArray()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Array.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
   instanceof
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
   typeof Operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  */
