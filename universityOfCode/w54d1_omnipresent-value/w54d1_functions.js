/* **********************functions.js************************* */
function isOmnipresent(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (!arr[i].includes(num)) {
      return false;
    }
  }
  return true;
}
module.exports = isOmnipresent;

/* Given Helpful Links
   Array.prototype.includes()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
   Array.prototype.every()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  */
