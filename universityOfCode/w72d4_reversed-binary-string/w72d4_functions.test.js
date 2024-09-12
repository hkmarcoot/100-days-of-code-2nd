/* *************functions.test.js************ */
const reversedBinaryInteger = require("./w72d4_functions");

test("test 1", () => {
  expect(reversedBinaryInteger(255)).toBe(255);
});

test("test 2", () => {
  expect(reversedBinaryInteger(446)).toBe(251);
});

test("test 3", () => {
  expect(reversedBinaryInteger(451)).toBe(391);
});

test("test 4", () => {
  expect(reversedBinaryInteger(634)).toBe(377);
});

test("test 5", () => {
  expect(reversedBinaryInteger(776)).toBe(67);
});

test("test 6", () => {
  expect(reversedBinaryInteger(898)).toBe(263);
});

test("test 7", () => {
  expect(reversedBinaryInteger(10)).toBe(5);
});

test("test 8", () => {
  expect(reversedBinaryInteger(12)).toBe(3);
});

test("test 9", () => {
  expect(reversedBinaryInteger(25)).toBe(6);
});

test("test 10", () => {
  expect(reversedBinaryInteger(45)).toBe(18);
});
