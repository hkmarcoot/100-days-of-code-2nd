function countdownSequences(arr) {
  var tempArr = [];
  var count = 0;
  var index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] != arr[i] + 1) {
      index = i;
    }
    if (arr[i] === 1) {
      tempArr.push(arr.slice(index, i + 1));
      count++;
    }
  }
  return [count, tempArr];
}

console.log(countdownSequences([4, 8, 3, 2, 1]));
console.log(countdownSequences([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1]));
console.log(countdownSequences([4, 3, 2, 1, 3, 2, 1, 1]));
console.log(countdownSequences([1, 1, 2, 1]));
console.log(countdownSequences([]));

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Array.prototype.reduceRight()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
 For
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 Loops and Iteration
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
*/
