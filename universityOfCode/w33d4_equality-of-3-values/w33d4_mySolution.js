function equal(a, b, c) {
  if (a === b && a === c && b === c) {
    return 3;
  } else if (a === b || a === c || b === c) {
    return 2;
  } else {
    return 0;
  }
}

console.log(equal(3, 4, 3));
console.log(equal(1, 1, 1));
console.log(equal(3, 4, 1));

/* Given Helpful Links
 Logical Operators
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
 Set Object
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 The arguments object
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 Set.prototype.size
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
*/
