/* ****************function.test.js******************* */
const findLargestNums = require("./w58d1_functions");

test("test 1", () => {
  expect(
    findLargestNums([
      [4, 2, 7, 1],
      [20, 70, 40, 90],
      [1, 2, 0],
    ])
  ).toEqual([7, 90, 2]);
});

test("test 2", () => {
  expect(
    findLargestNums([
      [0.4321, 0.7634, 0.652],
      [1.324, 9.32, 2.5423, 6.4314],
      [9, 3, 6, 3],
    ])
  ).toEqual([0.7634, 9.32, 9]);
});

test("test 3", () => {
  expect(
    findLargestNums([
      [-34, -54, -74],
      [-32, -2, -65],
      [-54, 7, -43],
    ])
  ).toEqual([-34, -2, 7]);
});

test("test 4", () => {
  expect(
    findLargestNums([
      [0.34, -5, 1.34],
      [-6.432, -1.762, -1.99],
      [32, 65, -6],
    ])
  ).toEqual([1.34, -1.762, 65]);
});

test("test 5", () => {
  expect(
    findLargestNums([
      [0, 0, 0, 0],
      [3, 3, 3, 3],
      [-2, -2],
    ])
  ).toEqual([0, 3, -2]);
});
