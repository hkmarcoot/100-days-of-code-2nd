function evenOnly(arr) {
  return arr.filter((x, index) => x % 2 === 0 && index % 2 === 0);
}

console.log(evenOnly([1, 3, 2, 6, 4, 8]));
console.log(evenOnly([0, 1, 2, 3, 4]));
console.log(evenOnly([1, 2, 3, 4, 5]));

/* Given Helpful Links
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Falsy
   - https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/
