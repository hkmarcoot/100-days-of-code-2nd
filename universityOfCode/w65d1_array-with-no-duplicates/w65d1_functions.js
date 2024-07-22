/* **************functions.js**************** */
function set(arr) {
  // var newArr = arr.sort((a, b) => a - b);
  return [...new Set(arr)];
}
module.exports = set;

// Reference
// https://www.geeksforgeeks.org/how-to-remove-duplicate-elements-from-javascript-array/

/* Given Helpful Links
   Set Object
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
   Array.from()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Spread Syntax
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   Set vs Array — What and when?
     - https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
*/
