/* *********************functions.js************************* */
function isHeteromecic(num) {
  for (let i = 0; i <= num; i++) {
    if (i * (i + 1) === num) {
      return true;
    } else if (i * (i + 1) > num) {
      return false;
    }
  }
}
module.exports = isHeteromecic;

// Reference
// https://stackoverflow.com/questions/45713938/jest-looping-through-dynamic-test-cases

/* Given Helpful Links
   Math.sqrt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
   Math.floor()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
   Math.ceil()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
  */
