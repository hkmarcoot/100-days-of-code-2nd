function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Google", "Apple", "Microsoft"]));
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
console.log(sortByLength(["Turing", "Einstein", "Jung"]));

/* Given Helpful Links
 Array.prototype.sort()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 string.length
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 How to Sort an Array by String Length
   - https://reactgo.com/javascript-sort-array-by-length/
 Sort Array By Length 
   - https://www.youtube.com/watch?v=rZiX6u567yo
*/
