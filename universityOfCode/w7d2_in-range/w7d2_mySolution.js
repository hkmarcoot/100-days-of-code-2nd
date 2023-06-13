function inRange(n, lower, upper) {
  if (n % 1 != 0) {
    return false;
  }
  return n >= lower && n < upper;
}

/* Given Helpful Links
 Number.isInteger()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 isNaN()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 Array.prototype.includes()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 Number.isSafeInteger() 
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
*/
