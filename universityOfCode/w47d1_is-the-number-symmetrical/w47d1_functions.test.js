/* *********************functions.test.js************************ */
const isSymmetrical = require("./functions");

test("Test 1", () => {
  expect(isSymmetrical(23)).toBe(false);
});

test("Test 2", () => {
  expect(isSymmetrical(9562)).toBe(false);
});

test("Test 3", () => {
  expect(isSymmetrical(10019)).toBe(false);
});

test("Test 4", () => {
  expect(isSymmetrical(1)).toBe(true);
});

test("Test 5", () => {
  expect(isSymmetrical(3223)).toBe(true);
});

test("Test 6", () => {
  expect(isSymmetrical(95559)).toBe(true);
});

test("Test 7", () => {
  expect(isSymmetrical(66566)).toBe(true);
});
