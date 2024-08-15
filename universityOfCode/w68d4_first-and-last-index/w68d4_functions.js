/* **************functions.js*************** */
function charIndex(str, char) {
  if (!str.includes(char)) return undefined;

  return [str.indexOf(char), str.lastIndexOf(char)];
}
module.exports = charIndex;

/* Given Helpful Links
   String.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
   String.prototype.lastIndexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
   Array.prototype.includes()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
*/
