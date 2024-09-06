/* ****************functions.js**************** */
function duplicateNums(arr) {
  var duplicate = [];
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] && !duplicate.includes(arr[i])) {
        count = count + 1;
      }
    }
    if (count > 1) {
      duplicate.push(arr[i]);
    }
  }
  return duplicate.length == 0 ? null : duplicate.sort((a, b) => a - b);
}
module.exports = duplicateNums;

/* Given Helpful Links
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   String.prototype.lastIndexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
*/
