/* ***************functions.js******************** */
function orderedMatrix(a, b) {
  var result = [];
  for (var i = 1; i <= a; i++) {
    var tempArr = [];
    for (var j = 1; j <= b; j++) {
      tempArr.push(j + (i - 1) * b);
    }
    result.push(tempArr);
  }
  return result;
}
module.exports = orderedMatrix;

/* Given Helpful Links
   Array.from()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
   Array() constructor
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
*/
