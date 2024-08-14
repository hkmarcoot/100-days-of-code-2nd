/* **************functions.test.js*************** */
const getDecimalPlaces = require("./functions");

test("test 1", () => {
  expect(getDecimalPlaces("3.22")).toBe(2);
});

test("test 2", () => {
  expect(getDecimalPlaces("400")).toBe(0);
});

test("test 3", () => {
  expect(getDecimalPlaces("43.50")).toBe(2);
});

test("test 4", () => {
  expect(getDecimalPlaces("100,000,000")).toBe(0);
});

test("test 5", () => {
  expect(getDecimalPlaces("3.1415")).toBe(4);
});

test("test 6", () => {
  expect(getDecimalPlaces("0")).toBe(0);
});

test("test 7", () => {
  expect(getDecimalPlaces("01")).toBe(0);
});

test("test 8", () => {
  expect(getDecimalPlaces("00010.00010")).toBe(5);
});

test("test 9", () => {
  expect(getDecimalPlaces("3,141.592")).toBe(3);
});
