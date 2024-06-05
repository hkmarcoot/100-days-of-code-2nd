/* ***************functions.js***************** */
function isFactorial(num) {
  function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
  }
  for (var i = 1; i < num; i++) {
    if (factorial(i) === num) {
      return true;
    } else if (factorial(i) > num) {
      return false;
    }
  }
}
module.exports = isFactorial;

/* Given Helpful Links
   Factorial
     - https://www.mathsisfun.com/numbers/factorial.html
   Math.sqrt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
   Number.isInteger()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
   Loops and iteration
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
   Determining Whether a Number Is a 'Factorial Number'
     - https://math.stackexchange.com/questions/923773/determining-whether-a-number-is-a-factorial-number#answers
*/
