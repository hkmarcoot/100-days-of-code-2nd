/* ***************functions.test.js**************** */
const rectangleInCircle = require("./w70d1_functions");

test("test 1", () => {
  expect(rectangleInCircle(5, 12, 7)).toBe(true);
});

test("test 2", () => {
  expect(rectangleInCircle(5, 12, 6)).toBe(false);
});

test("test 3", () => {
  expect(rectangleInCircle(3, 7, 4)).toBe(true);
});

test("test 4", () => {
  expect(rectangleInCircle(4, 7, 4)).toBe(false);
});

test("test 5", () => {
  expect(rectangleInCircle(11, 1, 6)).toBe(true);
});

test("test 6", () => {
  expect(rectangleInCircle(21, 12, 12)).toBe(false);
});
