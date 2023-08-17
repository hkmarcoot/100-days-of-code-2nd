function isSpecialArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      if (arr[i] % 2 !== 0) {
        return false;
      }
    } else {
      if (arr[i] % 2 !== 1) {
        return false;
      }
    }
  }
  return true;
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));

/* Given Helpful Links
 Array.prototype.every()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 Loops and Iteration
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
*/
