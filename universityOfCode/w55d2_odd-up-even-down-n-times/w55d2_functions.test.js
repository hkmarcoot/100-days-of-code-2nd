/* **************functions.test.js***************** */
const evenOddTransform = require("./w55d2_functions");

test("test 1", () => {
  expect(evenOddTransform([3, 4, 9], 3)).toEqual([9, -2, 15]);
});

test("test 2", () => {
  expect(evenOddTransform([0, 0, 0], 10)).toEqual([-20, -20, -20]);
});

test("test 3", () => {
  expect(evenOddTransform([1, 2, 3], 1)).toEqual([3, 0, 5]);
});

test("test 4", () => {
  expect(evenOddTransform([55, 90, 830], 2)).toEqual([59, 86, 826]);
});
