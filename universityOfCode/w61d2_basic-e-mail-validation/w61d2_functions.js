/* ***************functions.js****************** */
function validateEmail(str) {
  var arr = str.split("");
  var indexOfAt = arr.indexOf("@");
  var indexOfdot = arr.lastIndexOf(".");
  return indexOfAt > 0 && indexOfdot > indexOfAt + 1;
}
module.exports = validateEmail;

/* Given Helpful Links
   RegExp.prototype.test()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   Array.prototype.lastIndexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
   String.prototype.endsWith()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
*/
