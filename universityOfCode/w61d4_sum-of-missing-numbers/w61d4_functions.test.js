/* **************functions.test.js***************** */
const sumMissingNumbers = require("./w61d4_functions");

test("test 1", () => {
  expect(sumMissingNumbers([1, 3, 5, 7, 10])).toBe(29);
});

test("test 2", () => {
  expect(sumMissingNumbers([10, 20, 30, 40, 50, 60])).toBe(1575);
});

test("test 3", () => {
  expect(sumMissingNumbers([7, 3, 8, 5, 12])).toBe(40);
});

test("test 4", () => {
  expect(sumMissingNumbers([99, 2, 45, 4, 17])).toBe(4782);
});

test("test 5", () => {
  expect(sumMissingNumbers([10, 7, 5, 3, 1])).toBe(29);
});

test("test 6", () => {
  expect(sumMissingNumbers([7, 8, 9, 10])).toBe(0);
});
