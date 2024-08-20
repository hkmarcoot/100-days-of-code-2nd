/* *****************functions.test.js******************* */
const arrayOperation = require("./w47d2_functions");

test("Test 1", () => {
  expect(arrayOperation(1, 10, 3)).toEqual([3, 6, 9]);
});

test("Test 2", () => {
  expect(arrayOperation(15, 20, 7)).toEqual([]);
});

test("Test 3", () => {
  expect(arrayOperation(10, 50, 10)).toEqual([10, 20, 30, 40, 50]);
});

test("Test 4", () => {
  expect(arrayOperation(1, 10, 2)).toEqual([2, 4, 6, 8, 10]);
});

test("Test 5", () => {
  expect(arrayOperation(1, 100, 17)).toEqual([17, 34, 51, 68, 85]);
});

test("Test 5", () => {
  expect(arrayOperation(15, 20, 5)).toEqual([15, 20]);
});
