function reversedString(str) {
  str = str.replace(/ +(?= )/g, "");
  return str.split(" ").reverse().join(" ");
}

// Reference:
// https://stackoverflow.com/questions/3286874/remove-all-multiple-spaces-in-javascript-and-replace-with-single-space

/* Given Helpful Links
 Array.prototype.reverse()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 Array.prototype.join()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 String.prototype.trim()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
*/
