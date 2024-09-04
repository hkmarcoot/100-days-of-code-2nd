/* ****************functions.js**************** */
function unrepeated(str) {
  var arr = str.split("");
  return [...new Set(arr)].join("");
}
module.exports = unrepeated;

/* Given Helpful Links
   Set Object
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
   Spread syntax (...)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   Rest Parameters
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
   Array.from()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/
