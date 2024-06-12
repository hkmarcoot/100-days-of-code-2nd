/* ****************functions.js******************* */
function lastDig(a, b, c) {
  return (
    parseInt(
      (
        parseInt(Math.abs(a).toString().slice(-1)) *
        parseInt(Math.abs(b).toString().slice(-1))
      )
        .toString()
        .slice(-1)
    ) === parseInt(Math.abs(c).toString().slice(-1))
  );
}
module.exports = lastDig;

/* Given Helpful Links
   Arithmetic Operators
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
   Math.abs()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
   String.prototype.substr()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
   String.prototype.charAt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
*/
