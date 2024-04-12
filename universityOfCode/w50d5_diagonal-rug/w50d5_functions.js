/* ****************** functions.js********************* */
function generateRug(n, dir) {
  var result = [];
  if (dir === "left") {
    for (var i = 0; i < n; i++) {
      var row = [];
      for (j = i; j >= 0; j--) {
        row.push(j);
      }
      for (j = 1; j < n - i; j++) {
        row.push(j);
      }
      result.push(row);
    }
  } else if (dir === "right") {
    for (var i = n - 1; i >= 0; i--) {
      // *** Same as dir === left ***
      var row = [];
      for (j = i; j >= 0; j--) {
        row.push(j);
      }
      for (j = 1; j < n - i; j++) {
        row.push(j);
      }
      result.push(row);
      // *** Same as dir === left ends ***
    }
  }
  return result;
}
module.exports = generateRug;

/* Given Helpful Links
   Array.from()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */
