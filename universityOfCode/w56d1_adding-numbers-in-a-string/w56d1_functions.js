/* ****************functions.js******************** */
function addNums(str) {
  var arr = str.split(", ");
  return arr.reduce((a, c) => a + parseInt(c), 0);
}
module.exports = addNums;

/* Given Helpful Links
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   Regex Tester and Debugger
     - https://regex101.com
   number() Function
     - https://www.w3schools.com/jsref/jsref_number.asp
   Number
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
   Remove Commas From the String
     - https://stackoverflow.com/questions/5788741/remove-commas-from-the-string-using-javascript
*/
