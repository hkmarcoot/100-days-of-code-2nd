function boxSeq(step) {
  if (step === 0) return 0;
  var count = 0;
  for (let i = 1; i <= step; i++) {
    if (i % 2 === 0) {
      count = count - 1;
    } else if (i % 2 === 1) {
      count = count + 3;
    }
  }
  return count;
}

console.log(boxSeq(0));
console.log(boxSeq(1));
console.log(boxSeq(2));
console.log(boxSeq(5));
console.log(boxSeq(6));
console.log(boxSeq(99));

/* Given Helpful Links
 Arithmetic Operators
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Remainder
 Modulus Operator
   - https://masteringjs.io/tutorials/fundamentals/modulus
 Arithmetic Sequences and Series
   - https://www.mathplanet.com/education/algebra-2/sequences-and-series/arithmetic-sequences-and-series
*/
