/* ***************functions.test.js******************* */
const movingPartition = require("./w55d3_functions");

test("test 1", () => {
  expect(movingPartition([1, 2, 3, 4, 5])).toEqual([
    [[1], [2, 3, 4, 5]],
    [
      [1, 2],
      [3, 4, 5],
    ],
    [
      [1, 2, 3],
      [4, 5],
    ],
    [[1, 2, 3, 4], [5]],
  ]);
});

test("test 2", () => {
  expect(movingPartition([-1, -1, -1, -1])).toEqual([
    [[-1], [-1, -1, -1]],
    [
      [-1, -1],
      [-1, -1],
    ],
    [[-1, -1, -1], [-1]],
  ]);
});

test("test 3", () => {
  expect(movingPartition([8, 9, 10])).toEqual([
    [[8], [9, 10]],
    [[8, 9], [10]],
  ]);
});

test("test 4", () => {
  expect(movingPartition([])).toEqual([]);
});
