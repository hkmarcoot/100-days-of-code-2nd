/* *****************functions.js********************** */
function rootDigit(value) {
  // return typeof value === "bigint" ? value.toString() : value;
  var str = value.toString();
  do {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
      sum += parseInt(str[i]);
    }
    str = sum.toString();
  } while (str.length != 1);
  return parseInt(str);
}
module.exports = rootDigit;

/* Given Helpful Links
   BigInt
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
*/
