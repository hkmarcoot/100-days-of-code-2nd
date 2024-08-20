/* ************functions.test.js*************** */
const validatePIN = require("./w63d3_functions");

test("test 1", () => {
  expect(validatePIN("1234")).toBe(true);
});

test("test 2", () => {
  expect(validatePIN("12345")).toBe(false);
});

test("test 3", () => {
  expect(validatePIN("a234")).toBe(false);
});

test("test 4", () => {
  expect(validatePIN("")).toBe(false);
});

test("test 5", () => {
  expect(validatePIN("123456")).toBe(true);
});

test("test 6", () => {
  expect(validatePIN("-234")).toBe(false);
});
