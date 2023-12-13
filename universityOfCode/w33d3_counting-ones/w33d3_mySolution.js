function countOnes(num) {
  return (num.toString(2).match(/1/g) || []).length;
}

console.log(countOnes(12));
console.log(countOnes(0));
console.log(countOnes(100));
console.log(countOnes(101));
console.log(countOnes(999));
console.log(countOnes(1e9));
console.log(countOnes(123456789));
console.log(countOnes(1234567890));

// Reference
// https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
// https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript

/* Given Helpful Links
 Number.prototype.toString()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 Binary Number System
   - https://www.mathsisfun.com/binary-number-system.html
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 Converting Numbers to Binary Representation
   - https://www.electronics-tutorials.ws/binary/bin_2.html
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Array.length
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
