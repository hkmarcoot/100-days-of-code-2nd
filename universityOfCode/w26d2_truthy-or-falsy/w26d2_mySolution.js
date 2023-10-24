function allTruthy(...args) {
  return args.every((x) => Boolean(x));
}

console.log(allTruthy(true, true, true));
console.log(allTruthy(false));
console.log(allTruthy(true));
console.log(allTruthy(false, true, true, true, 20));
console.log(allTruthy(Infinity, 92347238467, 219378, "Hello World"));
console.log(allTruthy(Infinity, 92347238467, 219378, "Hello World", 0));

/* Given Helpful Links
 Array.prototype.every()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 Boolean
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
