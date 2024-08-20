/* *************functions.test.js**************** */
const getNumberOfApples = require("./w65d2_functions");

test("test 1", () => {
  expect(getNumberOfApples(10, "90%")).toBe(1);
});

test("test 2", () => {
  expect(getNumberOfApples(25, "10%")).toBe(22);
});

test("test 3", () => {
  expect(getNumberOfApples(0, "10%")).toBe(
    "The children didn't get any apples"
  );
});

test("test 4", () => {
  expect(getNumberOfApples(40, "30%")).toBe(28);
});

test("test 5", () => {
  expect(getNumberOfApples(10, "44%")).toBe(5);
});

test("test 6", () => {
  expect(getNumberOfApples(12, "100%")).toBe(
    "The children didn't get any apples"
  );
});

test("test 7", () => {
  expect(getNumberOfApples(40, "100%")).toBe(
    "The children didn't get any apples"
  );
});
