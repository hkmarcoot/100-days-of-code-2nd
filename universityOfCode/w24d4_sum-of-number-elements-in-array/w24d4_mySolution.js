function elementSum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result += arr[i];
    }
  }
  return result;
}

function elementSum2(arr) {
  return arr.filter((x) => typeof x === "number").reduce((a, c) => a + c, 0);
}

console.log(elementSum([1, 2, "13", "4", "645"]));
console.log(elementSum([true, false, "123", "75"]));
console.log(elementSum([1, 2, 3, 4, 5, true]));
console.log(elementSum(["abcd", 1234, false, true, 564, "hii"]));

/* Given Helpful Links
 typeof
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
