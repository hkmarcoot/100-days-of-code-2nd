/* **************functions.js************** */
function firstPlace(str) {
  if (!str) return "No road available";
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] !== "=") {
      return str[i];
    }
  }
  if (str[0] === "=") {
    return "No car available";
  }
}
module.exports = firstPlace;

/* Given Helpful Links
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   RegExp.prototype.test()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
   Array.prototype.pop()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
*/
