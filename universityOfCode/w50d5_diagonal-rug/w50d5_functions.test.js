/* ********************functions.test.js*********************** */
const generateRug = require("./w50d5_functions");

test("test 1", () => {
  expect(generateRug(4, "left")).toEqual([
    [0, 1, 2, 3],

    [1, 0, 1, 2],

    [2, 1, 0, 1],

    [3, 2, 1, 0],
  ]);
});

test("test 2", () => {
  expect(generateRug(5, "right")).toEqual([
    [4, 3, 2, 1, 0],

    [3, 2, 1, 0, 1],

    [2, 1, 0, 1, 2],

    [1, 0, 1, 2, 3],

    [0, 1, 2, 3, 4],
  ]);
});

test("test 3", () => {
  expect(generateRug(6, "left")).toEqual([
    [0, 1, 2, 3, 4, 5],

    [1, 0, 1, 2, 3, 4],

    [2, 1, 0, 1, 2, 3],

    [3, 2, 1, 0, 1, 2],

    [4, 3, 2, 1, 0, 1],

    [5, 4, 3, 2, 1, 0],
  ]);
});

test("test 4", () => {
  expect(generateRug(1, "left")).toEqual([[0]]);
});

test("test 5", () => {
  expect(generateRug(2, "right")).toEqual([
    [1, 0],

    [0, 1],
  ]);
});
