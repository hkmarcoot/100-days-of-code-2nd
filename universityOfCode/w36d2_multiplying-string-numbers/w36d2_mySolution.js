function multiplyNums(str) {
  var arr = str.split(", ");
  var result = 1;
  for (let i = 0; i < arr.length; i++) {
    result = result * parseInt(arr[i]);
  }
  return result;
}

console.log(multiplyNums("2, 3"));
console.log(multiplyNums("1, 2, 3, 4"));
console.log(multiplyNums("54, 75, 453, 0"));
console.log(multiplyNums("10, -2"));
console.log(multiplyNums("-26, 1, -27, -12, -19"));

/* Given Helpful Links
   String.prototype.split()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
   Array.prototype.reduce()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
   Number() Constructor
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
   Array.prototype.map()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   Array.prototype.length
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
   Spread syntax (...)
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  */
