function doubleSwap(str, c1, c2) {
  var resultStr = str;
  const obj = {
    [c1]: c2,
    [c2]: c1,
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === c1 || str[i] === c2) {
      resultStr = resultStr.slice(0, i) + obj[str[i]] + resultStr.slice(i + 1);
    }
  }
  return resultStr;
}

console.log(doubleSwap("aabbcc", "a", "b"));
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"));
console.log(doubleSwap("128 895 556 788 999", "8", "9"));
console.log(doubleSwap("001101", "1", "0"));

// Reference
// https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable

/* Given Helpful Links
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 Array.prototype.join()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/
