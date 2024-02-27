/* ***********************functions.js****************************** */
function factorGroup(num) {
  return Number.isInteger(Math.sqrt(num)) ? "odd" : "even";
}

// OR finding every factors

function factorGroup(num) {
  var count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count % 2 === 0 ? "even" : "odd";
}
module.exports = factorGroup;

// Reference:
// https://javascript.plainenglish.io/javascript-algorithm-to-check-for-a-perfect-square-number-52cfd83c0757

/* Given Helpful Links
   Number of Elements with Odd Factors in Given Range
     - https://www.geeksforgeeks.org/number-elements-odd-factors-given-range/
   Math.sqrt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
   Number.isInteger()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
   Remainder (%)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
   Conditional Operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   Count Number of Factors of a Number
     - https://www.tutorialspoint.com/count-number-of-factors-of-a-number-javascript
  */
