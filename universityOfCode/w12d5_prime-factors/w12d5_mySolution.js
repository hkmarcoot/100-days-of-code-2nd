function primeFactorization(num) {
  var arr = [];
  var i = 1;
  var calNum = num;
  do {
    i++;
    if (calNum % i === 0) {
      arr.push(i);
      calNum = calNum / i;
      i--;
    }
  } while (i <= num);
  return arr;
}

console.log(primeFactorization(12));
console.log(primeFactorization(60));
console.log(primeFactorization(97));
console.log(primeFactorization(1));
console.log(primeFactorization(100));
console.log(primeFactorization(17));
console.log(primeFactorization(27));
console.log(primeFactorization(29));

/* Given Helpful Links
 Array.prototype.push()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 Math.sqrt()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
 Array.prototype.slice()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Array.prototype.sort()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 String.prototype.charCodeAt()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 String.fromCharCode()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
*/
