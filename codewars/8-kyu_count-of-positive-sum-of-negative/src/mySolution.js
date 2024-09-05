/*
Title: 
- Count of positives /sum of negatives

Description:
- Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Tags:
- Arrays, Fundamentals, Lists

*/

export function countPositivesSumNegatives(input) {
  let x = 0;
  let y = 0;
  if (!input) return [];
  if (input == []) return [];
  if (input == [0, 0]) return [];
  input.forEach((num) => {
    if (num > 0) {
      x = x + 1;
    }
    if (num < 0) {
      y = y + num;
    }
  });
  if (x == 0 && y == 0) {
    return [];
  } else if (x >= 0 && y <= 0) {
    return [x, y];
  }
}
