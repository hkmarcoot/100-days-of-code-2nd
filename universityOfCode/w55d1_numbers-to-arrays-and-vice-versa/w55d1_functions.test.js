/* ****************functions.test.js******************* */
const { toArray, toNumber } = require("./functions");

test("test 1", () => {
  expect(toArray(235)).toEqual([2, 3, 5]);
});

test("test 2", () => {
  expect(toArray(19)).toEqual([1, 9]);
});

test("test 3", () => {
  expect(toArray(0)).toEqual([0]);
});

test("test 4", () => {
  expect(toNumber([2, 3, 5])).toBe(235);
});

test("test 5", () => {
  expect(toNumber([1, 9])).toBe(19);
});

test("test 6", () => {
  expect(toNumber([0])).toBe(0);
});
