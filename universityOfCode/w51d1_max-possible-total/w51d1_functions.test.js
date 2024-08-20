/* *********************functions.test.js***************** */
const maxTotal = require("./w51d1_functions");

test("test 1", () => {
  expect(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])).toBe(43);
});

test("test 2", () => {
  expect(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])).toBe(100);
});

test("test 3", () => {
  expect(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(40);
});

test("test 4", () => {
  expect(maxTotal([12, 8, 73, 1, 24, 11, 88, 39, 2, -47])).toBe(236);
});

test("test 5", () => {
  expect(maxTotal([48, 90, 42, -12, 1, -14, -36, -37, -9, -4])).toBe(177);
});
