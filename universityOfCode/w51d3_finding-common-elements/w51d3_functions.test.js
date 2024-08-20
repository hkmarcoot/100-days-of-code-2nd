/* ***************functions.test.js******************* */
const commonElements = require("./w51d3_functions");

test("test 1", () => {
  expect(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])).toEqual([3]);
});

test("test 2", () => {
  expect(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])).toEqual([
    1, 3, 4, 7,
  ]);
});

test("test 3", () => {
  expect(commonElements([-1, 3, 4, 6, 7, 9], [])).toEqual([]);
});

test("test 4", () => {
  expect(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])).toEqual([
    1, 2, 4, 5,
  ]);
});

test("test 5", () => {
  expect(commonElements([-1, 3, 4, 6, 7, 9], [100, 300, 900])).toEqual([]);
});
