/* ********************functions.js************************ */
function getHashTags(str) {
  var punctuationless = str.replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  var lowerCase = punctuationless.toLowerCase();
  var arr = lowerCase.split(" ");
  arr.sort((a, b) => b.length - a.length);
  arr = arr.map((x) => "#" + x);

  return arr.slice(0, 3);
}
module.exports = getHashTags;

// Reference:
// https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
// https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element
// https://stackoverflow.com/questions/34883068/how-to-get-first-n-number-of-elements-from-an-array
// https://stackoverflow.com/questions/56839801/jest-js-error-received-serializes-to-the-same-string

/* Given Helpful Links
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   String.prototype.toLowerCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
   Map
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  */
