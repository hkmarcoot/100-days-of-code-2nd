/* *************functions.js**************** */
function boomIntensity(n) {
  var result = "";
  if (n < 2) return "boom";
  if (n % 2 === 0 && n % 5 === 0) {
    result = result + "B";
    for (var i = 0; i < n; i++) {
      result = result + "O";
    }
    result = result + "M!";
    return result;
  }
  if (n % 2 === 0) {
    result = result + "b";
    for (var i = 0; i < n; i++) {
      result = result + "o";
    }
    result = result + "m!";
    return result;
  }
  if (n % 5 === 0) {
    result = result + "B";
    for (var i = 0; i < n; i++) {
      result = result + "O";
    }
    result = result + "M";
    return result;
  }
}
module.exports = boomIntensity;

/* Given Helpful Links
   String.prototype.repeat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
*/
