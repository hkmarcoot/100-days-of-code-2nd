/* **************************functions.js*************************** */
function convertBinary(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase().charCodeAt(0) >= 97 &&
      str[i].toLowerCase().charCodeAt(0) <= 109
    ) {
      result.push(0);
    } else {
      result.push(1);
    }
  }
  return result.join("");
}
module.exports = convertBinary;

/* Given Helpful Links
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   ASCII Table
     - https://www.asciitable.com
   Immutability in JavaScript
     - https://www.sitepoint.com/immutability-javascript/
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  */
