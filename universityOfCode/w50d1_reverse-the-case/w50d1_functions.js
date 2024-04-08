/* *********************functions.js********************* */
function reverseCase(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      newStr = newStr + str[i].toUpperCase();
    } else {
      newStr = newStr + str[i].toLowerCase();
    }
  }
  return newStr;
}
module.exports = reverseCase;

/* Given Helpful Links
   String.prototype.toUpperCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
   String.prototype.toLowerCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */
