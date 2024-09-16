/* ***************functions.js**************** */
function firstVowel(str) {
  var lowerCasedStr = str.toLowerCase();
  var vowel = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < lowerCasedStr.length; i++) {
    if (vowel.includes(lowerCasedStr[i])) {
      return i;
    }
  }
  return null;
}
module.exports = firstVowel;

/* Given Helpful Links
   String.prototype.search()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   Vowels
     - https://www.pinterest.com/pin/137289488618494389/
*/
