function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));

/* Given Helpful Links
 Recursion Function
   - https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-1.php
 Factorial
   - https://en.wikipedia.org/wiki/Factorial
*/
