/* **************functions.js**************** */
function cardHide(str) {
  var arr = str.split("");
  for (var i = 0; i < arr.length - 4; i++) {
    arr[i] = "*";
  }
  return arr.join("");
}
module.exports = cardHide;

/* Given Helpful Links
   String.prototype.repeat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
   String.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
   String.prototype.padStart()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   Array splice() Method
     - https://www.w3schools.com/jsref/jsref_splice.asp
   String length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
*/
