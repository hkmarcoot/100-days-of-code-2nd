/* ********************functions.js************************ */
function formatNum(num) {
  var str = num.toString();
  var result = "";
  var count = 0;
  for (var i = str.length - 1; i >= 0; i--) {
    count++;
    if (count % 3 != 0) {
      result = str[i] + result;
    } else {
      result = "," + str[i] + result;
    }
  }
  if (result[0] === ",") {
    result = result.slice(1);
  }
  return result;
}
module.exports = formatNum;

/* Given Helpful Links
   Number.prototype.toLocaleString()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  */
