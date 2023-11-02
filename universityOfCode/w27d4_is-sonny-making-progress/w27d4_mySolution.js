function progressDays(arr) {
  var count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      count++;
    }
  }
  return count;
}

console.log(progressDays([3, 4, 1, 2]));
console.log(progressDays([10, 11, 12, 9, 10]));
console.log(progressDays([6, 5, 4, 3, 2, 9]));
console.log(progressDays([9, 9]));
console.log(progressDays([12, 11, 10, 12, 11, 13]));

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 For Loop 
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
*/
