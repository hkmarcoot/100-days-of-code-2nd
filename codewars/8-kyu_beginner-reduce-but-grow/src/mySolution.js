/*
Title: 
- Beginner - Reduce but Grow

Description:
- Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

Tags:
- Arrays, Fundamentals

*/

export function grow(x) {
  return x.reduce((total = 1, item) => total * item);
}
