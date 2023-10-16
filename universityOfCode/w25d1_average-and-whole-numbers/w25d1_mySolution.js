function isWhole(arr) {
  return arr.reduce((a, c) => a + c, 0) % arr.length === 0;
}

console.log(isWhole([1, 3]));
console.log(isWhole([1, 2, 3, 4]));
console.log(isWhole([1, 5, 6]));
console.log(isWhole([1, 1, 1]));
console.log(isWhole([9, 2, 2, 5]));

/* Given Helpful Links
 Number.isInteger()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
