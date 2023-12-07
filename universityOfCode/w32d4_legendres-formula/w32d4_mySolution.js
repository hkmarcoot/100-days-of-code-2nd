function legendre(p, n) {
  if (p > n) return 0;
  var denominator = p;
  var result = 0;
  var i = 1;
  do {
    result += int(n / denominator);
    i++;
    denominator = Math.pow(p, i);
  } while (denominator <= n);
  return result;
}

function int(num) {
  return Math.floor(num);
}

// Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow

/* Given Helpful Links
 Legendre's Formula
   - https://en.wikipedia.org/wiki/Legendre%27s_formula
 Math.pow()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
 Remainder (%)
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 Math.floor()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
