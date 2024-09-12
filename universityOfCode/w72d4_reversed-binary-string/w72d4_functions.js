/* **************functions.js*************** */
function reversedBinaryInteger(n) {
  var binary = n.toString(2);
  var reversedBinary = "";
  for (var i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      reversedBinary = reversedBinary + "0";
    } else {
      reversedBinary = reversedBinary + "1";
    }
  }
  return parseInt(reversedBinary, 2);
}

function reversedBinaryInteger2(n) {
  return parseInt(
    n.toString(2).replace(/[0-1]/g, (v) => (v == 1 ? 0 : 1)),
    2
  );
}

module.exports = reversedBinaryInteger;

// Reference
// https://stackoverflow.com/questions/26127192/how-to-convert-decimal-to-binary-in-js
// https://stackoverflow.com/questions/4338315/inverting-a-binary-value-of-a-number
// https://stackoverflow.com/questions/10258828/how-to-convert-binary-string-to-decimal

/* Given Helpful Links
   parseInt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Spread Syntax
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   Array.prototype.reverse()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
   Number.prototype.toString()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
*/
