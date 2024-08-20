/* ***********************functions.test.js************************* */
const canConcatenate = require("./w50d3_functions");

test("test 1", () => {
  expect(
    canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7])
  ).toBe(true);
});

test("test 2", () => {
  expect(
    canConcatenate(
      [
        [2, 1, 3],
        [5, 4, 7, 6],
      ],
      [1, 2, 3, 4, 5, 6, 7]
    )
  ).toBe(true);
});

test("test 3", () => {
  expect(
    canConcatenate(
      [
        [2, 1, 3],
        [5, 4, 7, 6],
      ],
      [7, 6, 5, 4, 3, 2, 1]
    )
  ).toBe(true);
});

test("test 4", () => {
  expect(
    canConcatenate(
      [
        [2, 1, 3],
        [5, 4, 7, 6, 7],
      ],
      [1, 2, 3, 4, 5, 6, 7]
    )
  ).toBe(false);
});

test("test 5", () => {
  expect(
    canConcatenate(
      [
        [2, 1, 3],
        [5, 4, 7],
      ],
      [1, 2, 3, 4, 5, 6, 7]
    )
  ).toBe(false);
});

test("test 6", () => {
  expect(canConcatenate([[1, 4], [3]], [1, 3, 4])).toBe(true);
});

test("test 7", () => {
  expect(canConcatenate([[1, 4], [3]], [1, 2, 3, 4])).toBe(false);
});

test("test 8", () => {
  expect(canConcatenate([[1, 4], [3]], [4, 3, 1])).toBe(true);
});

test("test 9", () => {
  expect(
    canConcatenate(
      [
        [1, 4],
        [2, 3],
      ],
      [4, 3, 1, 2]
    )
  ).toBe(true);
});

test("test 10", () => {
  expect(canConcatenate([[1], [2], [3, 4]], [4, 3, 1, 2])).toBe(true);
});

test("test 11", () => {
  expect(canConcatenate([[1], [2], [3], [4]], [4, 3, 1, 2])).toBe(true);
});
