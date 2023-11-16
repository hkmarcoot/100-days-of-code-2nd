function histogram(arr, char) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      str = str.concat(char);
    }
    str = str.concat("\\n");
  }
  return str;
}
console.log(histogram([1, 3, 4], "#"));
console.log(histogram([6, 2, 15, 3], "="));

/* Given Helpful Links
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 String.prototype.repeat()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 Histogram
   - https://en.wikipedia.org/wiki/Histogram
*/
