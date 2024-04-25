/* *****************functions.js****************** */
function multiplicationTable(num) {
  var result = [];
  for (var i = 1; i <= num; i++) {
    var arr = [];
    for (var j = 1; j <= num; j++) {
      arr.push(j * i);
    }
    result.push(arr);
  }
  return result;
}
module.exports = multiplicationTable;

/* Given Helpful Links
   Array.from()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
   for
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */
