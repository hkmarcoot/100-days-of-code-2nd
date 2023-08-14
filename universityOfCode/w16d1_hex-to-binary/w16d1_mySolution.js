function toBinary(hexStr) {
  return parseInt(hexStr, 16).toString(2).padStart(8, "0");
}

console.log(toBinary("0xFF"));
console.log(toBinary("0xAA"));
console.log(toBinary("0xFA"));

/* Given Helpful Links
 Bitwise
   - https://www.w3schools.com/js/js_bitwise.asp
 How do I convert an integer to binary in JavaScript?
   - https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
 Number.toString() Method
   - https://www.tutorialspoint.com/javascript/number_tostring.htm
*/
