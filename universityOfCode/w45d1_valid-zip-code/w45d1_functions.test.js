/* ****************functions.test.js******************** */
const isValid = require("./functions");

test("test 1", () => {
  expect(isValid("59001")).toBe(true);
});

test("test 2", () => {
  expect(isValid("853a7")).toBe(false);
});

test("test 3", () => {
  expect(isValid("732 32")).toBe(false);
});

test("test 4", () => {
  expect(isValid("788876")).toBe(false);
});

test("test 5", () => {
  expect(isValid("a923b")).toBe(false);
});

test("test 6", () => {
  expect(isValid("5923!")).toBe(false);
});

test("test 7", () => {
  expect(isValid("59238aa")).toBe(false);
});

test("test 8", () => {
  expect(isValid("88231")).toBe(true);
});
