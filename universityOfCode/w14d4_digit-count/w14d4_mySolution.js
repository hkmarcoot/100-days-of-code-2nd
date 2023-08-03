function count(num, result = 0) {
  if (num) {
    return count(Math.floor(num / 10), ++result);
  }
  return result;
}

console.log(count(123456));
console.log(count(4399));
console.log(count(65432291));

/* Given Helpful Links
 Math.abs()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 Math.log10()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10
 How to count digits of given number?
   - https://www.tutorialspoint.com/how-to-count-digits-of-given-number-javascript
 Template Literals
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/
