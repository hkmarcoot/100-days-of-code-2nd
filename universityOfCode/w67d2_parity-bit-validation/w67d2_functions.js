/* ***************functions.js************** */
function validateBinary(str) {
  var regex = /[1]/g;
  var newStr = str.substring(0, str.length - 1);
  var numOfOne = newStr.match(regex).length;
  if (numOfOne % 2 === 0 && str[str.length - 1] === "0") return true;
  if (numOfOne % 2 === 1 && str[str.length - 1] === "1") return true;

  return false;
}
module.exports = validateBinary;

// Reference
// https://stackoverflow.com/questions/45713938/jest-looping-through-dynamic-test-cases
// https://charactercounter.com/count-characters-in-javascript
// https://www.w3schools.com/jsref/jsref_substring.asp

/* Given Helpful Links
   String replace() Method
     - https://www.w3schools.com/jsref/jsref_replace.asp
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   Array reduce() Method
     - https://www.w3schools.com/jsref/jsref_reduce.asp
   parseInt and .map()
     - https://wsvincent.com/javascript-parseint-map/
*/
