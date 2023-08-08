function letterCount(chr, str) {
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === chr) {
      count++;
    }
  }
  return count;
}

console.log(letterCount("n", "sonny"));
console.log(letterCount("b", "big fat bubble"));

/* Given Helpful Links
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 String.prototype.charAt()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 Spread Syntax
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 Array.length
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 For Loop
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
*/
