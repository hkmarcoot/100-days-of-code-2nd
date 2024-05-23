/* ************************functions.js******************************* */
function insertWhitespace(str) {
  for (var i = 1; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      str = str.slice(0, i) + " " + str.slice(i);
      i++;
    }
  }
  return str;
}
module.exports = insertWhitespace;

/* Given Helpful Links
   String.prototype.trim()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   String.prototype.charCodeAt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
*/
