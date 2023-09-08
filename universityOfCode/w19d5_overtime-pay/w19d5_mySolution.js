function overTime(arr) {
  var startTime = arr[0];
  var endTime = arr[1];
  var hourlyRate = arr[2];
  var overtimeMultiplier = arr[3];
  var earned = 0;
  // Assume the minimum startTime is 9
  if (endTime <= 17) {
    earned = (endTime - startTime) * hourlyRate;
  } else if (endTime > 17 && startTime <= 17) {
    earned = (17 - startTime) * hourlyRate;
    earned += (endTime - 17) * hourlyRate * overtimeMultiplier;
  } else if (endTime > 17 && startTime > 17) {
    earned = (endTime - startTime) * hourlyRate * overtimeMultiplier;
  }

  return "$" + earned.toFixed(2);
}

console.log(overTime([9, 17, 30, 1.5]));
console.log(overTime([9, 18, 40, 2]));
console.log(overTime([13, 20, 32.5, 2]));
console.log(overTime([9, 13, 25, 1.5]));
console.log(overTime([11.5, 19, 40, 1.8]));
console.log(overTime([10, 17, 30, 1.5]));
console.log(overTime([10.5, 17, 32.25, 1.5]));
console.log(overTime([16, 18, 30, 1.8]));
console.log(overTime([18, 20, 32.5, 2]));
console.log(overTime([13.25, 15, 30, 1.5]));
console.log(overTime([13, 21, 38.6, 1.8]));

/* Given Helpful Links
 Number.prototype.toFixed()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 Math.min()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
 Math.max()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
 Conditional (ternary) Operator
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 Template Literals
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/
