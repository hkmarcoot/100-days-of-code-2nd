/* ****************functions.test.js******************* */
const evenlyDivisible = require("./functions");

test("test 1", () => {
  expect(evenlyDivisible(1, 10, 2)).toBe(30);
});

test("test 2", () => {
  expect(evenlyDivisible(1, 10, 3)).toBe(18);
});

test("test 3", () => {
  expect(evenlyDivisible(0, 12, 3)).toBe(30);
});

test("test 4", () => {
  expect(evenlyDivisible(-10, -1, 2)).toBe(-30);
});

test("test 5", () => {
  expect(evenlyDivisible(-10, -1, 3)).toBe(-18);
});

test("test 6", () => {
  expect(evenlyDivisible(1, 10, 20)).toBe(0);
});

test("test 7", () => {
  expect(evenlyDivisible(-10, 10, 2)).toBe(0);
});
