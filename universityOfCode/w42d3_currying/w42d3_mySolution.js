function multiply(arr) {
  return function (num) {
    return arr.map((x) => x * num);
  };
}

console.log(multiply([1, 2, 3])(1));
console.log(multiply([1, 2, 3])(2));
console.log(multiply([1, 2, 3])(0));
console.log(multiply([4, 6, 5])(10));
console.log(multiply([])(10));

/* Given Helpful Links
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Currying
     - https://javascript.info/currying-partials
   Currying Stack Overflow
     - https://stackoverflow.com/questions/36314/what-is-currying
  */
