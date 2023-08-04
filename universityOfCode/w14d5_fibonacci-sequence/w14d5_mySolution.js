function fibonacci(n) {
  if (n === 0) return [];
  if (!n) return undefined;
  var arr = [];
  function F(n) {
    if (n === 1) return 1;
    if (n === 0) return 0;
    return F(n - 1) + F(n - 2);
  }
  for (let i = 0; i < n; i++) {
    arr.push(F(i));
  }
  return arr;
}

console.log(fibonacci(4));
console.log(fibonacci(7));
console.log(fibonacci(0));
console.log(fibonacci());
console.log(fibonacci(17));
console.log(fibonacci(1));

/* Given Helpful Links
 Fibonacci Number
   - https://en.wikipedia.org/wiki/Fibonacci_sequence
 Array.prototype.push()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 For Loop
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 How to Implement Dynamic Programming
   - https://javascript.plainenglish.io/memoization-vs-tabulation-how-to-implement-dynamic-programming-in-javascript-part-1-e8afce548219
*/
