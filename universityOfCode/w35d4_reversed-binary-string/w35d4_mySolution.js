function reversedBinaryInteger(n) {
  return parseInt(n.toString(2).split("").reverse().join(""), 2);
}

console.log(reversedBinaryInteger(10));
console.log(reversedBinaryInteger(12));
console.log(reversedBinaryInteger(25));
console.log(reversedBinaryInteger(45));

// Reference
// https://www.freecodecamp.org/news/js-basics-how-to-reverse-a-number-9aefc20afa8d/
// https://masteringjs.io/tutorials/tools/binary-to-decimal

/* Given Helpful Links
   parseInt()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Spread Syntax
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   Array.prototype.reverse()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
   Number.prototype.toString()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  */
