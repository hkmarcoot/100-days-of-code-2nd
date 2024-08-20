/* ***********************functions.test.js********************** */
// I have changed test 7 and 10 to be true.
const canBuild = require("./w55d5_functions");

test("test 1", () => {
  expect(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [])).toBe(true);
});

test("test 2", () => {
  expect(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 8])).toBe(true);
});

test("test 3", () => {
  expect(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 80])).toBe(true);
});

test("test 4", () => {
  expect(canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92])).toBe(true);
});

test("test 5", () => {
  expect(canBuild([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 23, 45, 6789])).toBe(
    true
  );
});

test("test 6", () => {
  expect(
    canBuild([0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 2, 22, 49, 444, 4])
  ).toBe(true);
});

test("test 7", () => {
  expect(canBuild([1, 1, 0, 0, 0, 0, 0, 0, 1, 0], [1, 80, 0])).toBe(true);
});

test("test 8", () => {
  expect(canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1])).toBe(false);
});

test("test 9", () => {
  expect(
    canBuild([0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 7, 2, 22, 49, 444, 4])
  ).toBe(false);
});

test("test 10", () => {
  expect(
    canBuild([0, 2, 3, 0, 5, 0, 0, 0, 0, 1], [11, 2, 22, 49, 444, 44])
  ).toBe(true);
});

test("test 11", () => {
  expect(
    canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44])
  ).toBe(false);
});
