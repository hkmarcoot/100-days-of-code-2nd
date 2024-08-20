/* ************functions.test.js*************** */
const mauriceWins = require("./functions");

test("test 1", () => {
  expect(mauriceWins([3, 5, 10], [4, 7, 11])).toBe(true);
});

test("test 2", () => {
  expect(mauriceWins([6, 8, 9], [7, 12, 14])).toBe(false);
});

test("test 3", () => {
  expect(mauriceWins([1, 8, 20], [2, 9, 100])).toBe(true);
});

test("test 4", () => {
  expect(mauriceWins([1, 2, 3], [2, 3, 4])).toBe(false);
});

test("test 5", () => {
  expect(mauriceWins([2, 4, 10], [3, 9, 11])).toBe(true);
});

test("test 6", () => {
  expect(mauriceWins([3, 8, 13], [5, 11, 15])).toBe(true);
});
