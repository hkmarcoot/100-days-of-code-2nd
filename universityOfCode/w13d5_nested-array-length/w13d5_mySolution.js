function length(arr) {
  return arr.flat(Infinity).length;
}

console.log(length([1, [2, 3]]));
console.log(length([1, [2, [3, 4]]]));
console.log(length([1, [2], 1, [2], 1]));

// Reference
// https://stackoverflow.com/questions/39887381/how-to-get-nested-array-length-in-javascript

/* Given Helpful Links
 Array.prototype.flat()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 Flatten Array using Array.flat()
   - https://medium.com/dailyjs/flatten-array-using-array-flat-in-javascript-ee4d0b2423e5
 Array.length
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 Learn and Understand Recursion in JavaScript
   - https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
 Infinity
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Array.prototype.forEach()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 Array.isArray()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
*/
