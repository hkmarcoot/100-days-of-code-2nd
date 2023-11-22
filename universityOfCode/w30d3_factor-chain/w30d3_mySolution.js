function factorChain(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(factorChain([1, 2, 4, 8, 16, 32]));
console.log(factorChain([1, 1, 1, 1, 1, 1]));
console.log(factorChain([2, 4, 6, 7, 12]));
console.log(factorChain([10, 1]));

/* Given Helpful Links
 Array.prototype.every()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Array.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 For Loop
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 Array.from() 
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/
