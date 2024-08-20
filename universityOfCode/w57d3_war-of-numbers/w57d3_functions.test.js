/* ***************functions.test.js******************* */
const warOfNumbers = require("./w57d3_functions");

test("test 1", () => {
  expect(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])).toBe(168);
});

test("test 2", () => {
  expect(warOfNumbers([654, 7, 23, 3, 78, 4, 56, 34])).toBe(793);
});

test("test 3", () => {
  expect(warOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(5);
});

test("test 4", () => {
  expect(
    warOfNumbers([
      97, 83, 209, 141, 134, 298, 110, 207, 229, 275, 115, 64, 244, 278,
    ])
  ).toBe(228);
});

test("test 5", () => {
  expect(
    warOfNumbers([
      332, 92, 35, 315, 109, 168, 320, 230, 63, 323, 16, 204, 105, 17, 226, 157,
      245, 44, 223, 136, 93,
    ])
  ).toBe(83);
});
