/* ***************functions.js**************** */
function invert(str) {
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr.reverse().join("");
}
module.exports = invert;

/* Given Helpful Links
   Array.prototype.reduceRight()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
   Map
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
   Array.prototype.reverse()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
*/
