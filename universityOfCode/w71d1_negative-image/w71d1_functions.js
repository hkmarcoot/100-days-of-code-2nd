/* ************functions.js************* */
function reverseImage(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var tempArr = [];
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        tempArr.push(1);
      } else {
        tempArr.push(0);
      }
    }
    result.push(tempArr);
  }
  return result;
}
module.exports = reverseImage;

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   replace() Method
     - https://www.w3schools.com/jsref/jsref_replace.asp
*/
