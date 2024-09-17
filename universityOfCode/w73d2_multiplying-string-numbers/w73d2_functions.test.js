/* ************functions.test.js************ */
const multiplyNums = require("./w73d2_functions");

test("test 1", () => {
  expect(multiplyNums("2, 3")).toBe(6);
});

test("test 2", () => {
  expect(multiplyNums("1, 2, 3, 4")).toBe(24);
});

test("test 3", () => {
  expect(multiplyNums("54, 75, 453, 0")).toBe(0);
});

test("test 4", () => {
  expect(multiplyNums("10, -2")).toBe(-20);
});
