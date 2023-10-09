function mean(num) {
  var str = num.toString();
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count += parseInt(str[i]);
  }
  return count / str.length;
}

console.log(mean(42));
console.log(mean(12345));
console.log(mean(666));

/* Given Helpful Links
 How to split a number into individual digits?
   - https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits
 How do I separate an integer into separate digits in an array in JavaScript?
   - https://stackoverflow.com/questions/9914216/how-do-i-separate-an-integer-into-separate-digits-in-an-array-in-javascript
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Array.from()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#:~:text=Array.,such%20as%20Map%20and%20Set%20
 Number.prototype.toString()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 Regular Expressions
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
*/
