function matchLastItem(arr) {
  // Cannot use newArr = arr;
  var newArr = arr.map((x) => x);
  newArr.pop();
  newArr = newArr.map((x) => x.toString());
  return newArr.join("") === arr[arr.length - 1].toString();
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
console.log(matchLastItem([0, 1, 2, 3, 4, 5, "12345"]));
console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));

// Reference
// https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/

/* Given Helpful Links
 Array.prototype.join()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 Array.prototype.pop()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
 Array.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 Array.prototype.length
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
*/
