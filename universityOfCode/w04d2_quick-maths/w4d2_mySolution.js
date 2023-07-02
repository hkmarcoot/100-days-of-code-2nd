function calculator(number1, operator, number2) {
  if (number2 === 0 && operator === "/") {
    return "Error: Cannot divide by 0!";
  }
  if (operator === "+") {
    return number1 + number2;
  }
  if (operator === "-") {
    return number1 - number2;
  }
  if (operator === "*") {
    return number1 * number2;
  }
  if (operator === "/") {
    return number1 / number2;
  }
}

/* Given Helpful Links
 eval()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
 Conditional (ternary) Operator
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 JavaScript Operators Reference
   - https://www.w3schools.com/jsref/jsref_operators.asp
*/
