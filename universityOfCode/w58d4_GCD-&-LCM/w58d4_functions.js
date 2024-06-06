/* ***************functions.js****************** */
function lcm(a, b) {
  var min = Math.max(a, b);
  while (!(min % a === 0 && min % b === 0)) {
    // while (min % a != 0 && min % b != 0) {
    // Notes: !(min % a === 0 && min % b === 0) is not equal to
    // (min % a != 0 && min % b != 0), which can be explained by a Venn diagram.
    min++;
  }
  return min;
}
module.exports = lcm;

// Reference
// https://www.programiz.com/javascript/examples/lcm
// https://www.30secondsofcode.org/js/s/lcm/#:~:text=Calculates%20the%20least%20common%20multiple,The%20GCD%20formula%20uses%20recursion.

/* Given Helpful Links
   Least Common Multiple
     - https://www.mathsisfun.com/least-common-multiple.html
   Math.max()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
   for
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
*/
