function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(13));

/* Given Helpful Links
 Factorial
   - https://en.wikipedia.org/wiki/Factorial
*/
