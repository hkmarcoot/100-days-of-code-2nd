/* ***************functions.js**************** */
/* Same with w3d3 */
function secondBest(arr) {
  var sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[1];
}
module.exports = secondBest;

/* Given Helpful Links
   Sort
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   Math.max()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
   Array
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
