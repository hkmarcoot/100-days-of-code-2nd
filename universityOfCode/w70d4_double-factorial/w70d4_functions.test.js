/* ***********functions.test.js************* */
const doubleFactorial = require("./w70d4_functions");

test("test 1", () => {
  expect(doubleFactorial(-1)).toBe(1);
});

test("test 2", () => {
  expect(doubleFactorial(0)).toBe(1);
});

test("test 3", () => {
  expect(doubleFactorial(1)).toBe(1);
});

test("test 4", () => {
  expect(doubleFactorial(2)).toBe(2);
});

test("test 5", () => {
  expect(doubleFactorial(7)).toBe(105);
});

test("test 6", () => {
  expect(doubleFactorial(9)).toBe(945);
});

test("test 7", () => {
  expect(doubleFactorial(14)).toBe(645120);
});

test("test 8", () => {
  expect(doubleFactorial(22)).toBe(81749606400);
});

test("test 9", () => {
  expect(doubleFactorial(25)).toBe(7905853580625);
});

test("test 10", () => {
  expect(doubleFactorial(27)).toBe(213458046676875);
});
