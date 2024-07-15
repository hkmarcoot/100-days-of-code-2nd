/* ***************functions.js******************* */
function inkLevels(obj) {
  var arr = Object.values(obj);
  return Math.min(...arr);
}
module.exports = inkLevels;

// Reference
// https://stackoverflow.com/questions/11142884/fast-way-to-get-the-min-max-values-among-properties-of-object

/* Given Helpful Links
   Object.values()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
   Math.min()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
   Spread Syntax
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   Array sort() Method
     - https://www.w3schools.com/jsref/jsref_sort.asp
   Array Iteration / Iterators
     - https://www.w3schools.com/js/js_array_iteration.asp
*/
