/* ************functions.js**************** */
function pluralize(arr) {
  var newArr = [...new Set(arr)];
  for (var i = 0; i < newArr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
      if (newArr[i] === arr[j]) {
        count++;
      }
    }
    if (count > 1) {
      newArr[i] = newArr[i] + "s";
    }
  }
  return newArr;
}
module.exports = pluralize;

// Reference
// https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.push()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   Array.prototype.lastIndexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
   Map
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
   Destructuring Assignment
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   Set
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/
