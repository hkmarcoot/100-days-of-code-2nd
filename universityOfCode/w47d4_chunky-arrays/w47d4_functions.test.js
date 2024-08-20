/* *************************functions.test.js******************************* */
const chunkify = require("./w47d4_functions");

test("Test 1", () => {
  expect(chunkify([2, 3, 4, 5], 2)).toEqual([
    [2, 3],
    [4, 5],
  ]);
});

test("Test 2", () => {
  expect(chunkify([2, 3, 4, 5, 6], 2)).toEqual([[2, 3], [4, 5], [6]]);
});

test("Test 3", () => {
  expect(chunkify([2, 3, 4, 5, 6, 7], 3)).toEqual([
    [2, 3, 4],
    [5, 6, 7],
  ]);
});

test("Test 4", () => {
  expect(chunkify([2, 3, 4, 5, 6, 7], 1)).toEqual([
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
  ]);
});

test("Test 5", () => {
  expect(chunkify([2, 3, 4, 5, 6, 7], 7)).toEqual([[2, 3, 4, 5, 6, 7]]);
});

test("Test 6", () => {
  expect(chunkify([2, 3, 4, 5], 3)).toEqual([[2, 3, 4], [5]]);
});

test("Test 7", () => {
  expect(chunkify([2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
    [2, 3, 4],
    [5, 6, 7],
    [8],
  ]);
});
