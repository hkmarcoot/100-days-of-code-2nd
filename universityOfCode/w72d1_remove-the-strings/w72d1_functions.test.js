/* **********functions.test.js************* */
const filterArray = require("./w72d1_functions");

test("test 1", () => {
  expect(filterArray([1, 2, "a", "b"])).toEqual([1, 2]);
});

test("test 2", () => {
  expect(filterArray([1, "a", "b", 0, 15])).toEqual([1, 0, 15]);
});

test("test 3", () => {
  expect(filterArray(["$%^", 567, "&&&"])).toEqual([567]);
});

test("test 4", () => {
  expect(filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88])).toEqual([
    43, 76, 88,
  ]);
});
