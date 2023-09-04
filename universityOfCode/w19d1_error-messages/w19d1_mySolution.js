function error(num) {
  return num === 1
    ? "Check the fan: e1"
    : num === 2
    ? "Emergency stop: e2"
    : num === 3
    ? "Pump Error: e3"
    : num === 4
    ? "c: e4"
    : num === 5
    ? "Temperatur Sensor Error: e5"
    : 101;
}

console.log(error(1));
console.log(error(2));
console.log(error(3));

/* Given Helpful Links
 Conditional Operator
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 Destructuring Assignment
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/
