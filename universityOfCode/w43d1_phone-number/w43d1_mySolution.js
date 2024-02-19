function formatPhoneNumber(arr) {
  return (
    "(" +
    arr[0] +
    arr[1] +
    arr[2] +
    ") " +
    arr[3] +
    arr[4] +
    arr[5] +
    "-" +
    arr[6] +
    arr[7] +
    arr[8] +
    arr[9]
  );
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/* Given Helpful Links
   Template Literals (Template Strings)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
   Array.prototype.join()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   Array.prototype.forEach()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   Array.prototype.splice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   String.prototype.replace()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
   Array.prototype.slice()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  */
