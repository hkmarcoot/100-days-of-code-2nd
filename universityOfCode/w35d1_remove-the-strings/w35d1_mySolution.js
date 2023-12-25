function filterArray(arr) {
  return arr.filter((x) => typeof x === "number");
}

console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray(["abc", 123]));
console.log(filterArray(["$%^", 123, "&&&"]));

// Reference
// https://mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/

/* Given Helpful Links
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 typeof Operator
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 Number.isInteger()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 Converting Strings to Numbers With Vanilla
   - https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
*/
