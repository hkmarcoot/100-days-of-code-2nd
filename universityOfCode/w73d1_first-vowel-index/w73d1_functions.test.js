/* *************functions.test.js**************** */
const firstVowel = require("./w73d1_functions");

test("test 1", () => {
  expect(firstVowel("hello")).toBe(1);
});

test("test 2", () => {
  expect(firstVowel("apple")).toBe(0);
});

test("test 3", () => {
  expect(firstVowel("string")).toBe(3);
});

test("test 4", () => {
  expect(firstVowel("STRAWBERRY")).toBe(3);
});

test("test 5", () => {
  expect(firstVowel("MELON")).toBe(1);
});

test("test 6", () => {
  expect(firstVowel("piNNEaPLE")).toBe(1);
});
