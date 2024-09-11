/* **************functions.js*************** */
function specialReverse(a, b) {
  var result = [];
  var arr = a.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === b) {
      arr[i] = arr[i].split("").reverse().join("");
    }
    result.push(arr[i]);
  }
  return result.join(" ");
}
module.exports = specialReverse;

// Reference
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.reverse()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   String.prototype.startsWith()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/
