function mirrorArray(arr) {
  var resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr = resultArr.concat(arr[i]);
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    resultArr = resultArr.concat(arr[i]);
  }
  return resultArr;
}

console.log(mirrorArray([0, 2, 4, 6]));
console.log(mirrorArray([1, 2, 3, 4, 5]));
console.log(mirrorArray([3, 5, 6, 7, 8]));

/* Given Helpful Links
 Array.prototype.concat()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 Array.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 Array.prototype.reverse()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
*/
