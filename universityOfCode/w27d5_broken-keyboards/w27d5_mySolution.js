function findBrokenKeys(correctStr, actualStr) {
  var returnArr = [];
  for (var i = 0; i < correctStr.length; i++) {
    if (correctStr[i] !== actualStr[i]) {
      if (!returnArr.includes(correctStr[i])) {
        returnArr.push(correctStr[i]);
      }
    }
  }
  return returnArr;
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));
console.log(findBrokenKeys("mozart", "aiwgvx"));
console.log(findBrokenKeys("5678", "4678"));
console.log(findBrokenKeys("!!??$$", "$$!!??"));

/* Given Helpful Links
 Set Object
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Array.from()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split?retiredLocale=de
*/
