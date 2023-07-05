function palindromes(arr) {
  var count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] != arr[i + 1]) {
      count++;
    }
  }
  return count;
}

console.log(palindromes([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
console.log(palindromes([1, 7, 1, 7, 1, 7, 1]));
console.log(palindromes([9, 5, 9, 5, 1, 1, 1]));

/* Given Helpful Links
 Loops and iteration
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 Array Methods
   - https://javascript.info/array-methods
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
