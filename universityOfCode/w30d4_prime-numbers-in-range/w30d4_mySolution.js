function primeInRange(n1, n2) {
  var result = [];
  for (let i = n1; i <= n2; i++) {
    var isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      result.push(i);
    }
  }
  return result.length > 0;
}

console.log(primeInRange(10, 15));
console.log(primeInRange(62, 66));
console.log(primeInRange(3, 5));

// Reference
// https://www.programiz.com/javascript/examples/prime-number

/* Given Helpful Links
 Array.from()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 Array.prototype.some()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Number Prime Test in JavaScript
   - https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript#:~:text=function%20isPrime(num)%20%7B%20if,log(isPrime(121)
*/
