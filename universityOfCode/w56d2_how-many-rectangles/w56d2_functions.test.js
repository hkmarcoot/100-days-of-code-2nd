/* ****************functions.test.js****************** */
const rectangles = require("./functions");

test("test 1", () => {
  expect(rectangles(1)).toBe(1);
});

test("test 2", () => {
  expect(rectangles(2)).toBe(9);
});

test("test 3", () => {
  expect(rectangles(3)).toBe(36);
});

test("test 4", () => {
  expect(rectangles(64)).toBe(4326400);
});

test("test 5", () => {
  expect(rectangles(76)).toBe(8561476);
});
