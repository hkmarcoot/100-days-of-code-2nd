/* **************functions.js*************** */
function sumMissingNumbers(arr) {
  var acsendingArr = arr.sort((a, b) => a - b);
  var lowest = acsendingArr[0];
  var highest = acsendingArr[acsendingArr.length - 1];
  var count = 0;
  for (var i = lowest; i < highest; i++) {
    if (!acsendingArr.includes(i)) {
      count += i;
    }
  }
  return count;
}
module.exports = sumMissingNumbers;

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Array
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   Math.max()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
   Math.min()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
*/
