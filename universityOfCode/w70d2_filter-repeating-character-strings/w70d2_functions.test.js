/* *****************functions.test.js******************* */
const identicalFilter = require("./w70d2_functions");

test("test 1", () => {
  expect(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])).toEqual([
    "aaaaaa",
    "d",
    "eeee",
  ]);
});

test("test 2", () => {
  expect(identicalFilter(["88", "999", "22", "545", "133"])).toEqual([
    "88",
    "999",
    "22",
  ]);
});

test("test 3", () => {
  expect(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])).toEqual([]);
});

test("test 4", () => {
  expect(identicalFilter(["aa", "bb", "cc", "dd", "ee"])).toEqual([
    "aa",
    "bb",
    "cc",
    "dd",
    "ee",
  ]);
});

test("test 5", () => {
  expect(identicalFilter(["aba", "bcb", "abb", "bcc", "eee"])).toEqual(["eee"]);
});

test("test 6", () => {
  expect(identicalFilter(["1", "2", "3"])).toEqual(["1", "2", "3"]);
});
