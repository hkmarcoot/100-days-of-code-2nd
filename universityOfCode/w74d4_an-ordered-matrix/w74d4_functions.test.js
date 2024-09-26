/* *************functions.test.js**************** */
const orderedMatrix = require("./w74d4_functions");

test("test 1", () => {
  expect(orderedMatrix(1, 2)).toEqual([[1, 2]]);
});

test("test 2", () => {
  expect(orderedMatrix(3, 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});

test("test 3", () => {
  expect(orderedMatrix(5, 5)).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ]);
});

test("test 4", () => {
  expect(orderedMatrix(3, 4)).toEqual([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]);
});
