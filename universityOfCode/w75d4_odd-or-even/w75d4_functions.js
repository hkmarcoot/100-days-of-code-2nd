/* ***************functions.js***************** */
/* Same with w3d4 */
function oddOrEven(int) {
  var str = int.toString();
  var adding = 0;
  for (var i = 0; i < str.length; i++) {
    adding = adding + parseInt(str[i]);
  }
  return adding % 2 === 0 ? "EVEN" : "ODD";
}
module.exports = oddOrEven;

/* Given Helpful Links
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   How to convert an integer into an array of digits?
     - https://stackoverflow.com/questions/19182266/how-to-convert-an-integer-into-an-array-of-digits/19182309
   Spread Syntax
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
