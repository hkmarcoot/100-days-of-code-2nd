/* ***************functions.js**************** */
function isSmooth(str) {
  var arr = str.split(" ");
  for (var i = 0; i < arr.length - 1; i++) {
    if (!(arr[i][arr[i].length - 1] === arr[i + 1][0])) {
      return false;
    }
  }
  return true;
}
module.exports = isSmooth;

/* Given Helpful Links
   String.prototype.toLowerCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   String.prototype.endsWith()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
*/
