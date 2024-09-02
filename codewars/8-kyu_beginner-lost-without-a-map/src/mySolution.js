/*
Title: 
- Beginner - Lost Without a Map

Description:
- Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

Tags:
- Arrays, Fundamentals

*/

export function maps(x) {
  let newMap = [];
  for (let i = 0; i < x.length; i++) {
    newMap[i] = x[i] * 2;
  }
  return newMap;
}
