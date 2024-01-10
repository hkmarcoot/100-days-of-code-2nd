function sumTwoSmallestNums(arr) {
  var newArr = arr.filter((n) => n >= 0);
  newArr = newArr.sort((a, b) => a - b);
  return newArr[0] + newArr[1];
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoSmallestNums([2, 9, 6, -1]));
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));
console.log(sumTwoSmallestNums([1, 1, 1, 1]));
console.log(sumTwoSmallestNums([-1, -1, 1, 1]));

/* Given Helpful Links
   Array.prototype.filter()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   Array.prototype.sort()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  */
