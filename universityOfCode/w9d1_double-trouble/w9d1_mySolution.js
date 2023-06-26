function double(str) {
  let tempStr = "";
  for (let i = 0; i < str.length; i++) {
    tempStr = tempStr.concat(str[i] + str[i]);
  }
  return tempStr;
}

console.log(double("hello"));

/* Given Helpful Links
 Array.prototype.join()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 String.prototype.repeat()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
*/
