/* *************functions.test.js************* */
const secondBest = require("./w75d3_functions");

test("test 1", () => {
  expect(secondBest([10, 40, 30, 20, 50])).toBe(40);
});

test("test 2", () => {
  expect(secondBest([25, 143, 89, 13, 105])).toBe(105);
});

test("test 3", () => {
  expect(secondBest([54, 23, 11, 17, 10])).toBe(23);
});

test("test 4", () => {
  expect(secondBest([513, 211, 131, 417, 11])).toBe(417);
});

test("test 5", () => {
  expect(secondBest([63, 44, 11, 22, 33, 66, 65])).toBe(65);
});
