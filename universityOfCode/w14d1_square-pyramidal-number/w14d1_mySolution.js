function squares(n) {
  if (n === 0) return 0;
  return n * n + squares(n - 1);
}

console.log(squares(2));
console.log(squares(4));
console.log(squares(5));

/* Given Helpful Links
 Square Pyramidal Number
   - https://en.wikipedia.org/wiki/Square_pyramidal_number
 Square Pyramidal Number Formula
   - https://math.fandom.com/wiki/Square_pyramidal_number
 Recursive Function Calls Itself until Condition Met
   - https://developer.mozilla.org/en-US/docs/Glossary/Recursion
 Exponentiation ** (power) operator
   - https://levelup.gitconnected.com/exponentiation-operator-in-javascript-e38e8255062c
*/
