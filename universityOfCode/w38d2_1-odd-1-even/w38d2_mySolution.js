function oneOddOneEven(num) {
  var digits = [];
  while (num != 0) {
    digits.push(num % 10);
    num = Math.trunc(num / 10);
  }
  digits.reverse();
  if (
    (digits[0] % 2 === 0 && digits[1] % 2 === 1) ||
    (digits[1] % 2 === 0 && digits[0] % 2 === 1)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(oneOddOneEven(11));
console.log(oneOddOneEven(12));
console.log(oneOddOneEven(55));
console.log(oneOddOneEven(22));

// Reference
// https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits

/* Given Helpful Links
   Conditional (ternary) Operator
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   Arithmetic Operators
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Remainder
   Array.prototype.some()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
   if...else
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
   String.prototype.match()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
   Math.floor()
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
  */
