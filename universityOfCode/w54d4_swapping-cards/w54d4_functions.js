/* **********************functions.js************************** */
function swapCards2(n1, n2) {
  var n1String = n1.toString();
  var n2String = n2.toString();
  if (parseInt(n1String[0]) > parseInt(n1String[1])) {
    // Swap n1's second card with n2's first card
    var n1New = parseInt(n1String[0] + n2String[0]);
    var n2New = parseInt(n1String[1] + n2String[1]);
  } else if (parseInt(n1String[0]) < parseInt(n1String[1])) {
    // Swap n1's first card with n2's first card
    n1New = parseInt(n2String[0] + n1String[1]);
    n2New = parseInt(n1String[0] + n2String[1]);
  } else if (n1String[0] === n1String[1]) {
    // Swap n1's first card with n2's first card
    n1New = parseInt(n2String[0] + n1String[1]);
    n2New = parseInt(n1String[0] + n2String[1]);
  }
  return n1New > n2New;
}

/* **********************functions.js************************** */
function getDigits(num) {
  var digits = [];
  var result = [];
  while (num != 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (var i = 0; i < digits.length; i++) {
    result.push(digits[digits.length - 1 - i]);
  }
  return result;
  // return digits.reverse();
}

function swapCards(n1, n2) {
  var n1Arr = getDigits(n1);
  var n2Arr = getDigits(n2);
  if (n1Arr[0] > n1Arr[1]) {
    // Swap n1's second card with n2's first card
    var n1New = n1Arr[0] * 10 + n2Arr[0];
    var n2New = n1Arr[1] * 10 + n2Arr[1];
  } else if (n1Arr[0] < n1Arr[1]) {
    // Swap n1's first card with n2's first card
    n1New = n2Arr[0] * 10 + n1Arr[1];
    n2New = n1Arr[0] * 10 + n2Arr[1];
  } else if (n1Arr[0] === n1Arr[1]) {
    // Swap n1's first card with n2's first card
    n1New = n2Arr[0] * 10 + n1Arr[1];
    n2New = n1Arr[0] * 10 + n2Arr[1];
  }
  return n1New > n2New;
}

module.exports = swapCards;

// Reference
// https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits

/* Given Helpful Links
   Number.prototype.toString()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString?retiredLocale=de
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   Math.min()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
   Array.prototype.indexOf()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  */
