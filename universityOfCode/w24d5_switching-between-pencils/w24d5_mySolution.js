function colorPatternTimes(arr) {
  var result = 0;
  // if (arr.length === 1) return 2;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      result += 1;
    }
  }
  result += arr.length * 2;
  return result;
}

console.log(colorPatternTimes(["Yellow", "Green", "Blue"]));
console.log(colorPatternTimes(["Red"]));
console.log(colorPatternTimes(["Yellow", "Green", "Yellow", "Yellow"]));
console.log(colorPatternTimes(["Blue", "Red", "Red"]));
console.log(colorPatternTimes(["Yellow", "Red", "Green"]));
console.log(colorPatternTimes(["Yellow", "Yellow", "Red", "Blue"]));

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
