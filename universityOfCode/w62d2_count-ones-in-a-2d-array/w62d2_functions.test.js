/* ****************functions.test.js******************* */
const countOnes = require("./w62d2_functions");

test("test 1", () => {
  expect(
    countOnes([
      [1, 0, 1],

      [0, 0, 0],

      [0, 0, 1],
    ])
  ).toBe(3);
});

test("test 2", () => {
  expect(
    countOnes([
      [1, 1, 1],

      [0, 0, 1],

      [1, 1, 1],
    ])
  ).toBe(7);
});

test("test 3", () => {
  expect(
    countOnes([
      [1, 2, 3],

      [0, 2, 1],

      [5, 7, 33],
    ])
  ).toBe(2);
});

test("test 4", () => {
  expect(
    countOnes([
      [5, 2, 3],

      [0, 2, 5],

      [5, 7, 33],
    ])
  ).toBe(0);
});

test("test 5", () => {
  expect(
    countOnes([
      [5, 2],

      [0, 2],

      [5, 1],
    ])
  ).toBe(1);
});

test("test 6", () => {
  expect(
    countOnes([
      [1, 1],

      [0, 1],
    ])
  ).toBe(3);
});

test("test 7", () => {
  expect(
    countOnes([
      [0, 1],

      [0, 0],
    ])
  ).toBe(1);
});
