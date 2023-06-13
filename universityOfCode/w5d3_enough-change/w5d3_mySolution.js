function myChange(change, amountDue) {
  return (
    change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01 >=
    amountDue
  );
}

/* Given Helpful Links
 Destructuring Assignment
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 Array.prototype.reduce()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 What is a quarter, dime, nickel, and a penny?
   - https://www.quora.com/What-is-a-quarter-dime-nickel-and-a-penny-What-are-their-differences
*/
