/* *****************functions.js******************* */
function admirable(n) {
  var proper = [];
  for (var i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      proper.push(i);
    }
  }
  var sumofproper = proper.reduce((a, c) => a + c, 0);
  if (sumofproper === n) return "Perfect";
  for (var i = 0; i < proper.length; i++) {
    if (sumofproper - proper[i] * 2 === n) {
      return proper[i];
    }
  }
  return "Neither";
}
module.exports = admirable;

/* Given Helpful Links
   Admirable Numbers
     - https://www.teherba.org/trottermath.net/numthry/admirabl.html
   JavaScript Array Push
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   JavaScript Array Reduce Function
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  */
