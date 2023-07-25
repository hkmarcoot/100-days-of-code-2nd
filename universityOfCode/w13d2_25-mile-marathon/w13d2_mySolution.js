function marathonDistance(arr) {
  return 25 === arr.reduce((a, c) => a + Math.abs(c), 0);
}

console.log(marathonDistance([1, 2, 3, 4]));
console.log(marathonDistance([-6, 15, 4]));
console.log(marathonDistance([1, 9, 5, 8, 2]));
console.log(marathonDistance([9, 7, 6, 5]));
console.log(marathonDistance([-9, 15, 1]));

/* 
initialValue (Optional)
A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.
*/

// Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

/* Given Helpful Links
 Math.abs()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Array.prototype.forEach()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
