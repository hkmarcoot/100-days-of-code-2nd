/* ****************functions.js**************** */
function rectangleInCircle(a, b, c) {
  var rectDiagonal = Math.sqrt(a * a + b * b);
  var circDiameter = c * 2;
  return circDiameter >= rectDiagonal;
}
module.exports = rectangleInCircle;

/* Given Helpful Links
   Math.hypot()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
   Math Object
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
