function reverseAndNot(num) {
  var startNum = num;
  var d = 0;
  var a = d;
  while (num > 0) {
    d = num % 10;
    a = a * 10 + d;
    num = Math.floor(num / 10);
  }
  return parseInt(a.toString() + startNum.toString());
}

function reverseAndNot2(num) {
  var str = num.toString();
  var arr = str.split("");
  arr = arr.reverse();
  return arr.join("") + str;
}

console.log(reverseAndNot(951));
console.log(reverseAndNot(123));

// Reference
// https://stackoverflow.com/questions/38053729/javascript-how-to-reverse-a-number

/* Given Helpful Links
 Array.prototype.reverse()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 Array.prototype.join()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 String.prototype.split()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 String.prototype.toString()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString
*/
