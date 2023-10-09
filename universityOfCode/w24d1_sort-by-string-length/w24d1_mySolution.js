function lengthSort(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(lengthSort(["a", "ccc", "dddd", "bb"]));

// Reference
// https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element

/* Given Helpful Links
 Array.prototype.sort()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 How to sort an array based on the length of each element?
   - https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element
 Sort Array by Length of Text
   - https://www.youtube.com/watch?v=rZiX6u567yo
*/
