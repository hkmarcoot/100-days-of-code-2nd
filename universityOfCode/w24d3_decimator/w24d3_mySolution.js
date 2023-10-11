function decimator(str) {
  var removeChrNum = Math.ceil(str.length / 10);
  return str.slice(0, str.length - removeChrNum);
}

console.log(decimator("1234567890"));
console.log(decimator("1234567890AB"));
console.log(decimator("123"));
console.log(decimator("123456789012345678901"));

/* Given Helpful Links
 Math.ceil()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
 String.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 String.prototype.substr()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 String Length
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 How do I chop/slice/trim off last character in string using Javascript?
   - https://stackoverflow.com/questions/952924/how-do-i-chop-slice-trim-off-last-character-in-string-using-javascript
*/
