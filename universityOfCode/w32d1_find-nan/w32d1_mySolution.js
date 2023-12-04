function findNaN(arr) {
  return arr.findIndex((n) => Number.isNaN(n));
}

console.log(findNaN([1, 2, NaN]));
console.log(findNaN([NaN, 1, 2, 3, 4]));
console.log(findNaN([0, 1, 2, 3, 4]));

// Reference
// https://masteringjs.io/tutorials/fundamentals/check-nan#:~:text=If%20you%20want%20the%20indexOf,isNaN(n))%20.

/* Given Helpful Links
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
