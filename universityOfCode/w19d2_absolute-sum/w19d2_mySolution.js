function absoluteSum(arr) {
  var result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Math.abs(arr[i]);
  }
  return result;
}

console.log(absoluteSum([2, -1, 4, 8, 10]));
console.log(absoluteSum([-3, -4, -10, -2, -3]));

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 reduce() Method
   - https://www.w3schools.com/jsref/jsref_reduce.asp
 Math.abs()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 Arrow Function Expressions
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 What Does "Absolute Value" Mean?
   - https://www.mathsisfun.com/numbers/absolute-value.html
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
