function indexMultiply(arr) {
  var result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] * i;
  }
  return result;
}

console.log(indexMultiply([1, 2, 3, 4, 5]));
console.log(indexMultiply([-3, 0, 8, -6]));

/* Given Helpful Links
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 for
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Arrow Function Expressions
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/
