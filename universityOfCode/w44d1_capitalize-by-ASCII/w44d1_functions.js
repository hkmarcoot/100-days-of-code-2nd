/* *************************functions.js*************************** */
function asciiCapitalize(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() % 2 === 0) {
      str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    } else {
      str = str.slice(0, i) + str[i].toLowerCase() + str.slice(i + 1);
    }
  }
  return str;
}
module.exports = asciiCapitalize;

/* Given Helpful Links
   String.prototype.charCodeAt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
   String.prototype.toLowerCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join?retiredLocale=vi
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   String.prototype.toUpperCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
   charCodeAt() Method
     - https://www.techonthenet.com/js/string_charcodeat.php
  */
