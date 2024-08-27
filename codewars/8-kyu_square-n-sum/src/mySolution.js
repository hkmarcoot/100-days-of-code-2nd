/*
Title: 
- Square(n) Sum

Description:
- Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2+2^2+2^2=9

Tags:
- Arrays, Lists, Fundamentals

*/

export function squareSum(numbers) {
  let sum = 0;
  numbers.forEach((e) => {
    sum += e * e;
  });

  return sum;
}
