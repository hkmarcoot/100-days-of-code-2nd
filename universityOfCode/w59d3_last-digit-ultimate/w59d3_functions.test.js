/* *************functions.test.js**************** */
const lastDig = require("./w59d3_functions");

test("test 1", () => {
  expect(lastDig(1, 1, 1)).toBe(true);
});

test("test 2", () => {
  expect(lastDig(12, 15, 10)).toBe(true);
});

test("test 3", () => {
  expect(lastDig(15228, 9209, 72162)).toBe(true);
});

test("test 4", () => {
  expect(lastDig(15, 1, 1)).toBe(false);
});

test("test 5", () => {
  expect(lastDig(123, 15, 10)).toBe(false);
});

test("test 6", () => {
  expect(lastDig(5213, 99219, 6165)).toBe(false);
});

test("test 7", () => {
  expect(lastDig(1523, 513, 512)).toBe(false);
});

test("test 8", () => {
  expect(lastDig(-15, 1, 1)).toBe(false);
});

test("test 9", () => {
  expect(lastDig(123, -15, 10)).toBe(false);
});

test("test 10", () => {
  expect(lastDig(-12, 15, -10)).toBe(true);
});

test("test 11", () => {
  expect(lastDig(15228, -9209, -72162)).toBe(true);
});
