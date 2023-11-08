function missingNum(arr) {
  var ascendArr = arr.sort((a, b) => a - b);
  for (var i = 0; i < 10; i++) {
    if (ascendArr[i] !== i + 1) {
      return i + 1;
    }
  }
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));
console.log(missingNum([3, 2, 5, 4, 7, 6, 8, 10, 9]));

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 1 + 2 + 3 + 4 + ⋯
   - https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_⋯
 Array.prototype.indexOf()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
*/
