/* *************functions.js*************** */
function getNumberOfApples(n, p) {
  var percentage = parseFloat(
    (1 - parseInt(p.substring(0, p.length - 1)) / 100).toFixed(2)
  );
  var result = n * percentage;
  if (result === 0) return "The children didn't get any apples";
  return Math.floor(result);
}
module.exports = getNumberOfApples;

/* Given Helpful Links
   parseInt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
   Math.trunc()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
   parseFloat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
*/
