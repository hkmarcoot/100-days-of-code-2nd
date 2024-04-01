/* ********************functions.test.js********************* */
const hashPlusCount = require("./functions");

test("Test 1", () => {
  expect(hashPlusCount("####")).toEqual([4, 0]);
});

test("Test 2", () => {
  expect(hashPlusCount("#")).toEqual([1, 0]);
});

test("Test 3", () => {
  expect(hashPlusCount("+++++++")).toEqual([0, 7]);
});

test("Test 4", () => {
  expect(hashPlusCount("++")).toEqual([0, 2]);
});

test("Test 5", () => {
  expect(hashPlusCount("#+#+")).toEqual([2, 2]);
});

test("Test 6", () => {
  expect(hashPlusCount("###+")).toEqual([3, 1]);
});
