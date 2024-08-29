/* ************functions.js*************** */
function doubleFactorial(n) {
  if (n <= 1) return 1;
  return n * doubleFactorial(n - 2);
}
module.exports = doubleFactorial;

// Reference
// https://www.geeksforgeeks.org/double-factorial/

/* Given Helpful Links
   What is double factorial?
     - https://www.techtarget.com/whatis/definitions/D#:~:text=The%20double%20factorial%2C%20symbolized%20by,than%20or%20equal%20to%202.
*/
