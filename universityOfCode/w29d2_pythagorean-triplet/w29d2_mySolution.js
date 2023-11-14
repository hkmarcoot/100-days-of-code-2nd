function isTriplet(n1, n2, n3) {
  var arr = [n1, n2, n3];
  arr = arr.sort((a, b) => a - b);
  return arr[0] * arr[0] + arr[1] * arr[1] === arr[2] * arr[2];
}

console.log(isTriplet(3, 4, 5));
console.log(isTriplet(13, 5, 12));
console.log(isTriplet(1, 2, 3));

/* Given Helpful Links
 Array.prototype.sort()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 Math.hypot()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
 Math.pow()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow#
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Array.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
*/
