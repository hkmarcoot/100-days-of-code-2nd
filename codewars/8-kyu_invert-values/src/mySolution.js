/*
Title:
- Invert values (8 kyu)

Description:
- Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.

Tags:
- Lists, Fundamentals, Arrays

*/
export function invert(array) {
  const newArr = array.map(timesNegativeOne);
  return newArr;
}

export function timesNegativeOne(num) {
  return num * -1;
}
