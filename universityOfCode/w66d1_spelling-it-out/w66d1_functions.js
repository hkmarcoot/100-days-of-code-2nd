/* ************functions.js**************** */
function spelling(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    var newStr = "";
    for (var j = 0; j <= i; j++) {
      // newStr = newStr.concat(str[j]);
      newStr = newStr + str[j];
    }
    result.push(newStr);
  }
  return result;
}
module.exports = spelling;

/* Given Helpful Links
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
   Loops and Iteration
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement
   String.prototype.substring()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
