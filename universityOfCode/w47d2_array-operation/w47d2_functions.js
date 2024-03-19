/* ****************functions.js************************ */
function arrayOperation(x, y, n) {
  var result = [];
  for (var i = x; i <= y; i++) {
    if (i % n === 0) {
      result.push(i);
    }
  }
  return result;
}
module.exports = arrayOperation;

/* Given Helpful Links
   The “for” Loop
     - https://javascript.info/while-for#the-for-loop
   Array.prototype.push()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  */
