/* **************functions.js************* */
function mauriceWins(a, b) {
  var count = 0;
  if (a[0] > b[2]) count++;
  if (a[1] > b[0]) count++;
  if (a[2] > b[1]) count++;
  return count >= 2;
}
module.exports = mauriceWins;

/* Given Helpful Links
     Destructuring Assignment
       - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
     Array.prototype.map()
       - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     Array.prototype.filter()
       - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     Logical Operators
       - https://devdocs.io/javascript/operators/
  */
