function tuckIn(arr1, arr2) {
  return arr1.slice(0, 1).concat(arr2).concat(arr1.slice(-1));
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15, 150], [45, 75, 35]));
console.log(
  tuckIn(["bottom", "topping"], ["tomatosauce", "vegetables", "cheese"])
);
console.log(
  tuckIn(
    [
      [1, 2],
      [5, 6],
    ],
    [[3, 4]]
  )
);
console.log(tuckIn([true, false], [false, true, null, undefined]));

/* Given Helpful Links
 Spread syntax (...)
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 Array
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 Arrow Function
   - https://www.w3schools.com/js/js_arrow_function.asp
 Splice() Method
   - https://www.w3schools.com/jsref/jsref_splice.asp
*/
