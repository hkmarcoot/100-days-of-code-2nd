/* ***************functions.js****************** */
function minutesToSeconds(str) {
  var arr = str.split(":");
  var min = parseInt(arr[0]);
  var sec = parseInt(arr[1]);
  if (sec >= 60) return false;

  return min * 60 + sec;
}
module.exports = minutesToSeconds;

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/split
*/
