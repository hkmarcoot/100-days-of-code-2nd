/* **************functions.test.js***************** */
const sliceSum = require("./w60d1_functions");

test("test 1", () => {
  expect(sliceSum([1, 3, 2], 2)).toBe(4);
});

test("test 2", () => {
  expect(sliceSum([4, 2, 5, 7], 4)).toBe(18);
});

test("test 3", () => {
  expect(sliceSum([3, 6, 2], 0)).toBe(0);
});
