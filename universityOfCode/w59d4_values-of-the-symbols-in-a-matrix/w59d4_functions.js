/* ***************functions.js***************** */
function checkScore(arr) {
  var newArr = [...arr.flat(Infinity)];
  var count = 0;
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] === "#") {
      count = count + 5;
    } else if (newArr[i] === "0") {
      count = count + 3;
    } else if (newArr[i] === "X") {
      count = count + 1;
    } else if (newArr[i] === "!") {
      count = count - 1;
    } else if (newArr[i] === "!!") {
      count = count - 3;
    } else if (newArr[i] === "!!!") {
      count = count - 5;
    }
  }
  return count < 0 ? 0 : count;
}
module.exports = checkScore;

/* Given Helpful Links
   Array.prototype.flat()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Working With Objects
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
*/
