/* **********************functions.test.js********************* */
const doubleLetters = require("./w46d3_functions");

test("Test 1", () => {
  expect(doubleLetters("loop")).toBe(true);
});

test("Test 2", () => {
  expect(doubleLetters("meeting")).toBe(true);
});

test("Test 3", () => {
  expect(doubleLetters("yummy")).toBe(true);
});

test("Test 4", () => {
  expect(doubleLetters("orange")).toBe(false);
});

test("Test 5", () => {
  expect(doubleLetters("munchkin")).toBe(false);
});

test("Test 6", () => {
  expect(doubleLetters("forestry")).toBe(false);
});
