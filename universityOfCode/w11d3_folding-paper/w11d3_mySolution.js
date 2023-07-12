function folds(n) {
  return (0.5 * Math.pow(2, n)) / 1000 + "m";
}

console.log(folds(1));
console.log(folds(4));
console.log(folds(21));

/* Given Helpful Links
 How to calculate the thickness of a paper by exponential calculation?
   - https://math.stackexchange.com/questions/280023/how-to-calculate-the-thickness-of-a-paper-by-exponential-calculation
 Template literals (template strings)
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 While Loop
   - https://www.w3schools.com/js/js_loop_while.asp
*/
