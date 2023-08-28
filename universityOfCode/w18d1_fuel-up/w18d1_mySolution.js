function fuel(num) {
  return num * 10 <= 100 ? 100 : num * 10;
}

console.log(fuel(15));
console.log(fuel(23.5));
console.log(fuel(3));

/* Given Helpful Links
 Conditional Operator
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 Math.max()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
 if...else
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
*/
