/* ******************functions.js****************** */
function countOnes(arr) {
  var count = 0;
  var flatArr = arr.flat(Infinity);
  for (var i = 0; i < flatArr.length; i++) {
    if (flatArr[i] === 1) {
      count++;
    }
  }
  return count;
}
module.exports = countOnes;

/* Given Helpful Links
   Array.prototype.flat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Array.prototype.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
*/
