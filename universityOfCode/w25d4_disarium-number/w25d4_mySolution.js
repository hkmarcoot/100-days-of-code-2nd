function isDisarium(num) {
  var str = num.toString();
  var sum = 0;
  for (var i = 1; i <= str.length; i++) {
    sum += Math.pow(parseInt(str[i - 1]), i);
  }
  return sum === num;
}

console.log(isDisarium(75));
console.log(isDisarium(135));
console.log(isDisarium(544));
console.log(isDisarium(518));

/* Given Helpful Links
 Math.pow()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Array.prototype.map()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
