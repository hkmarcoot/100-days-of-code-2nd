function lcm(num1, num2) {
  var [num, smallerNum] = [num1, num2].sort((a, b) => b - a);
  num = num - 1;
  do {
    num++;
  } while (num % num1 != 0 || num % num2 != 0);
  return num;
}

console.log(lcm(9, 18));
console.log(lcm(8, 5));
console.log(lcm(17, 11));
console.log(lcm(17, 5));
console.log(lcm(3, 12));
console.log(lcm(9, 9));

/* Given Helpful Links
 Least Common Multiple
   - https://www.mathsisfun.com/least-common-multiple.html
 while
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 Remainder (%)
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
*/
