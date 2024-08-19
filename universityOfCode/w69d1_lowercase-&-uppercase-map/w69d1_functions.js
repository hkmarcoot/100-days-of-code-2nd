/* *************functions.js************* */
function mapping(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push([arr[i], arr[i].toUpperCase()]);
  }
  return Object.fromEntries(newArr);
}
module.exports = mapping;

/* Given Helpful Links
   Object.fromEntries()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   String.prototype.toUpperCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
   Array.prototype.entries()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
*/
