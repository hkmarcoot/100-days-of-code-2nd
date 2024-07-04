/* ****************functions.js****************** */
function getPrices(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr[i].split("$");
    var num = parseFloat(arr2[1].slice(0, arr2[1].length - 1));
    result.push(num);
  }
  return result;
}
module.exports = getPrices;

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Number.parseFloat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
   slice() Method
     - https://www.w3schools.com/jsref/jsref_slice_array.asp
*/
