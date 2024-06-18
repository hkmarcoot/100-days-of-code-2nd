/* ***************functions.js***************** */
function timeSaved(limit, avg, disavg) {
  var time = (disavg / avg) * 60;
  var dislimit = (limit * time) / 60;
  var diff = disavg - dislimit;
  return parseFloat(((diff / limit) * 60).toFixed(1));
}
module.exports = timeSaved;

/* Given Helpful Links
   Math.abs()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
   Number.prototype.toFixed()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
   Speeding Time Savings
     - http://personal.denison.edu/~silveira/speeding.html
*/
