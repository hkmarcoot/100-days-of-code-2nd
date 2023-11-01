function uniqueSort(arr) {
  var tempArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < tempArr.length - 1; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      tempArr.splice(i + 1, 1);
      i = i - 1;
    }
  }

  return tempArr;
}

console.log(uniqueSort([1, 2, 4, 3]));
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));
console.log(uniqueSort([6, 7, 3, 2, 1]));

// Reference:
// https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/#:~:text=You%20can%20remove%20the%20element,of%20the%20element%20to%20remove.&text=The%20splice%20method%20can%20accept%20many%20arguments.

/* Given Helpful Links
 Set Object
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 Array.prototype.sort()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 Spread Syntax
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 Array.from()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/
