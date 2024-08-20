/* *************functions.test.js*************** */
const isFactorial = require("./w58d3_functions");

test("test 1", () => {
  expect(isFactorial(6)).toBe(true);
});

test("test 2", () => {
  expect(isFactorial(16)).toBe(false);
});

test("test 3", () => {
  expect(isFactorial(24)).toBe(true);
});

test("test 4", () => {
  expect(isFactorial(36)).toBe(false);
});

test("test 5", () => {
  expect(isFactorial(720)).toBe(true);
});

test("test 6", () => {
  expect(isFactorial(120)).toBe(true);
});
