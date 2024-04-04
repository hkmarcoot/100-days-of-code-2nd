/* *******************functions.test.js*********************** */
const depth = require("./functions");

test("test 1", () => {
  expect(depth([1, 2, 3, 4])).toBe(1);
});

test("test 2", () => {
  expect(depth([1, [2, 3, 4]])).toBe(2);
});

test("test 3", () => {
  expect(depth([1, [2, [3, 4]]])).toBe(3);
});

test("test 4", () => {
  expect(depth([1, [2, [3, [4]]]])).toBe(4);
});

test("test 5", () => {
  expect(depth([1, [2, [3, [4]]], 4])).toBe(4);
});

test("test 6", () => {
  expect(depth([1, [2], 3, [4], 5, [6]])).toBe(2);
});

test("test 7", () => {
  expect(depth([1, 2, 3, 4, [[5]], [6], 7])).toBe(3);
});
