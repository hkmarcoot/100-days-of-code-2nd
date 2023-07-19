function longestPrefix(arr) {
  var result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (result[j] !== arr[i][j]) {
        result = result.slice(0, j);
        break;
      }
    }
  }
  return result;
}

console.log(longestPrefix(["flower", "flow", "flight"]));
console.log(longestPrefix(["dog", "racecar", "car"]));
console.log(longestPrefix(["interview", "intersection", "interstate"]));
console.log(longestPrefix(["hello", "heaven", "heavy"]));

/* Given Helpful Links
 Array.prototype.indexOf()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 String.prototype.substring()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
*/
