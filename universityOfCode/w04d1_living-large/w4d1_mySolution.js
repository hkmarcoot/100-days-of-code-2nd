function larger(num) {
  return num >= parseInt(num.toString().split("").reverse().join(""));
}

/* Given Helpful Links
 Array.prototype.reverse()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 String.prototype.charAt()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
 Object.prototype.toString()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
 String.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
*/
