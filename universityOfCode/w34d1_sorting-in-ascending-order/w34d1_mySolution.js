function sortNumAscending(arr) {
  if (!arr) return [];
  return arr.sort((a, b) => a - b);
}

console.log(sortNumAscending([1, 2, 10, 50, 5]));
console.log(sortNumAscending([80, 29, 4, -95, -24, 85]));
console.log(sortNumAscending(null));
console.log(sortNumAscending([]));

/* Given Helpful Links
 Sorting A JavaScript Array Using Array.sort()
   - http://www.javascriptkit.com/javatutors/arraysort.shtml
 Array.prototype.sort()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 Array.isArray()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
*/
