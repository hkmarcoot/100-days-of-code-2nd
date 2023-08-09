function totalVolume(...arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i][0] * arr[i][1] * arr[i][2];
  }
  return count;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));
console.log(totalVolume([5, 1, 10], [1, 9, 2]));
console.log(totalVolume([1, 1, 5], [3, 3, 1]));

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Spread Syntax
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 for...of
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
