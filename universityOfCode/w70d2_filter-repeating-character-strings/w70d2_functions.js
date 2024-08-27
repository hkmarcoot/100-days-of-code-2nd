/* ******************functions.js********************* */
function identicalFilter(arr) {
  var result = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) {
      result.push(arr[i]);
    } else {
      var addToResult = true;
      for (j = 0; j < arr[i].length - 1; j++) {
        if (arr[i][j] !== arr[i][j + 1]) {
          addToResult = false;
          // End the loop
          j = arr[i].length - 1;
        }
      }
      if (addToResult === true) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
module.exports = identicalFilter;

/* Given Helpful Links
   Set Object
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
   Array.prototype.every()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
