/* *****************functions.js******************** */
function digits2(int) {
  return Math.max(Math.floor(Math.log10(Math.abs(int))), 0) + 1;
}

function digits(int) {
  var numDigits = 0;
  var integers = Math.abs(int);

  while (integers > 0) {
    integers = (integers - (integers % 10)) / 10;
    numDigits++;
  }
  return numDigits;
}
module.exports = digits;

// Reference
// https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript

/* Given Helpful Links
   Math.abs()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
   Math.sign()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
*/
