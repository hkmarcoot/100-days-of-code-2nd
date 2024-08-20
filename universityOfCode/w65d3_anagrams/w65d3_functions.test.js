/* ************functions.test.js*************** */
const isAnagram = require("./w65d3_functions");

test("test 1", () => {
  expect(isAnagram("cristian", "Cristina")).toBe(true);
});

test("test 2", () => {
  expect(isAnagram("Dave Barry", "Ray Adverb")).toBe(true);
});

test("test 3", () => {
  expect(isAnagram("Nope", "Note")).toBe(false);
});

test("test 4", () => {
  expect(isAnagram("Apple", "Appeal")).toBe(false);
});
