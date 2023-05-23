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
