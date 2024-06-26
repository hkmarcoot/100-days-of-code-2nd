/* ***************functions.js***************** */
function reverse(str) {
  if (str.includes(" ")) {
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length >= 5) {
        arr[i] = arr[i].split("").reverse().join("");
      }
    }
    return arr.join(" ");
  } else {
    if (str.length >= 5) {
      str = str.split("").reverse().join("");
    }
    return str;
  }
}
module.exports = reverse;

/* Given Helpful Links
   Array.prototype.reverse()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   Array.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/
