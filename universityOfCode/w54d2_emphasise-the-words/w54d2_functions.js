/* **********************functions.js********************* */
function emphasise(str) {
  if (str === "") return "";
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return arr.join(" ");
}
module.exports = emphasise;

/* Given Helpful Links
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   Loops and Iteration
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
   String.prototype.toUpperCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
   String.prototype.toLowerCase()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
  */
