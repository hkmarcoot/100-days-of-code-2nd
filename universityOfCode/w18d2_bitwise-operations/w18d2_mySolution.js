function bitwiseAND(num1, num2) {
  return num1 & num2;
}

function bitwiseOR(num1, num2) {
  return num1 | num2;
}

function bitwiseXOR(num1, num2) {
  return num1 ^ num2;
}

function decToBinary(num) {
  return ("00000000" + num.toString(2)).slice(-8);
}

console.log(bitwiseAND(7, 12));
console.log(bitwiseOR(7, 12));
console.log(bitwiseXOR(7, 12));
console.log(bitwiseAND(32, 17));
console.log(bitwiseOR(32, 17));
console.log(bitwiseXOR(32, 17));
console.log(bitwiseAND(13, 19));
console.log(bitwiseOR(13, 19));
console.log(bitwiseXOR(13, 19));

// Reference
// https://stackoverflow.com/questions/26242887/js-efficient-way-to-convert-integer-to-8-digit-binary

/* Given Helpful Links
 Binary bitwise operators
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
 Bitwise
   - https://www.w3schools.com/js/js_bitwise.asp
 Bitwise Operators
   - https://www.w3schools.com/java/java_operators.asp
 toString() Method
   - https://www.geeksforgeeks.org/javascript-number-tostring-method/
 Number.prototype.toString()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
*/
