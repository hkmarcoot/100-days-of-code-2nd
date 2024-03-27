/* ************************functions.js************************** */
function multTable(num) {
  var result = [];
  var tempArr = [];
  for (var i = 1; i <= num; i++) {
    tempArr = [];
    for (var j = 1; j <= num; j++) {
      tempArr.push(i * j);
    }
    result.push(tempArr);
  }
  return result;
}
module.exports = multTable;

/* Given Helpful Links
   Array.from()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
   Map
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  */
