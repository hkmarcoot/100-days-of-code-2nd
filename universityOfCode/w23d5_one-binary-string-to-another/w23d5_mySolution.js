function minSwaps(str1, str2) {
  var count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }
  return count / 2;
}

console.log(minSwaps("1100", "1001"));
console.log(minSwaps("110011", "010111"));
console.log(minSwaps("10011001", "01100110"));
console.log(minSwaps("1100", "0011"));

/* Given Helpful Links
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
*/
