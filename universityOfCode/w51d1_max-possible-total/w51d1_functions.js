/* ***********************functions.js********************* */
function maxTotal(arr) {
  var newArr = arr.sort((a, b) => b - a);
  var result = 0;
  for (var i = 0; i < 5; i++) {
    result += newArr[i];
  }
  return result;
}
module.exports = maxTotal;

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/slice
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   Array.prototype.reverse()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
  */
