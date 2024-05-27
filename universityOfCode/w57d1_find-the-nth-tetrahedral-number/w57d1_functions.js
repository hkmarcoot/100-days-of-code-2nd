/* *************functions.js************** */
function tetra(n) {
  if (n === 1) return 1;
  return (n * (n + 1)) / 2 + tetra(n - 1);
}
module.exports = tetra;

/* Given Helpful Links
   Expressions and Operators
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
   Tetrahedral Number Sequence
     - https://www.mathsisfun.com/tetrahedral-number.html
*/
