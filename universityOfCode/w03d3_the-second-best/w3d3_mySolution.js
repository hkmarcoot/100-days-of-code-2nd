/************Code Starts Here***************/
function secondBest(array) {
  array.sort((a, b) => b - a);
  return array[1];
}
/************Code Ends**********************/

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
