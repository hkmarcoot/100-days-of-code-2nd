/* *************************functions.js************************ */
function isSastry(num) {
  var longNum = parseInt(num.toString() + (num + 1).toString());
  for (var i = 0; i < longNum / 2; i++) {
    if (i * i === longNum) {
      return true;
    } else if (i * i > longNum) {
      return false;
    }
  }
}
module.exports = isSastry;
