/* ***********************functions.test.js*************************** */
const multTable = require("./w48d3_functions");

test("Test 1", () => {
  expect(multTable(1)).toEqual([[1]]);
});

test("Test 2", () => {
  expect(multTable(2)).toEqual([
    [1, 2],
    [2, 4],
  ]);
});

test("Test 3", () => {
  expect(multTable(3)).toEqual([
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
  ]);
});

test("Test 4", () => {
  expect(multTable(4)).toEqual([
    [1, 2, 3, 4],
    [2, 4, 6, 8],
    [3, 6, 9, 12],
    [4, 8, 12, 16],
  ]);
});

test("Test 5", () => {
  expect(multTable(5)).toEqual([
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10],
    [3, 6, 9, 12, 15],
    [4, 8, 12, 16, 20],
    [5, 10, 15, 20, 25],
  ]);
});
