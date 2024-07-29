/* **********functions.test.js************** */
const spelling = require("./functions");

test("test 1", () => {
  expect(spelling("bee")).toEqual(["b", "be", "bee"]);
});

test("test 2", () => {
  expect(spelling("cake")).toEqual(["c", "ca", "cak", "cake"]);
});

test("test 3", () => {
  expect(spelling("happy")).toEqual(["h", "ha", "hap", "happ", "happy"]);
});

test("test 4", () => {
  expect(spelling("eagerly")).toEqual([
    "e",
    "ea",
    "eag",
    "eage",
    "eager",
    "eagerl",
    "eagerly",
  ]);
});

test("test 5", () => {
  expect(spelling("believe")).toEqual([
    "b",
    "be",
    "bel",
    "beli",
    "belie",
    "believ",
    "believe",
  ]);
});
