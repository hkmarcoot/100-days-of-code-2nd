/* **********************functions.js*********************** */
function depth(arr) {
  return Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(depth)) : 0;
}
module.exports = depth;

// Reference
// https://stackoverflow.com/questions/55420156/get-arrays-depth-in-javascript

/* Given Helpful Links
   Array.isArray()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
   Recursive Function
     - https://www.javascripttutorial.net/javascript-recursive-function/
   Array.prototype.flat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
  */
