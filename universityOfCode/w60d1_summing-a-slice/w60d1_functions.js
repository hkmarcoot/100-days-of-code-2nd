/* ****************functions.js******************** */
function sliceSum(arr, n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += arr[i];
  }
  return count;
}
module.exports = sliceSum;

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
   reduce() Method
     - https://www.w3schools.com/jsref/jsref_reduce.asp
   Array.prototype.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
   slice() Method
     - https://www.w3schools.com/jsref/jsref_slice_array.asp
*/
