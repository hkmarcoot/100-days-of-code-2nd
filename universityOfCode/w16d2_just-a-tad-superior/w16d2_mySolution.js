function isSuperior(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      return true;
    }
  }
  return false;
}

console.log(isSuperior([1, 2, 3, 4], [1, 2, 3, 3]));
console.log(isSuperior(["a", "b", "c"], ["a", "d", "c"]));
console.log(isSuperior([true, 10, "zebra"], [true, 10, "ant"]));
console.log(isSuperior([1, 2, 3, 4], [1, 2, 4, 4]));

/* Given Helpful Links
 String Comparison
   - https://javascript.info/comparison#string-comparison
 How do I compare two arrays in JavaScript?
   - https://www.30secondsofcode.org/js/s/array-comparison/
*/
