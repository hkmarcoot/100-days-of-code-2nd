function multiples(num, length) {
  var returnArr = [];
  for (let i = 0; i < length; i++) {
    returnArr.push(num * (i + 1));
  }
  return returnArr;
}

console.log(multiples(7, 5));
console.log(multiples(12, 10));

/* Given Helpful Links
 Array.from()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 For Loop
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 Array.prototype.push()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Array.prototype.flat()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
*/
