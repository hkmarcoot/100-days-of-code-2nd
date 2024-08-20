/* ****************functions.test.js****************** */
const timeSaved = require("./w60d2_functions");

test("test 1", () => {
  expect(timeSaved(80, 90, 40)).toBe(3.3);
});

test("test 2", () => {
  expect(timeSaved(80, 90, 4000)).toBe(333.3);
});

test("test 3", () => {
  expect(timeSaved(80, 100, 40)).toBe(6.0);
});

test("test 4", () => {
  expect(timeSaved(80, 100, 10)).toBe(1.5);
});

test("test 5", () => {
  expect(timeSaved(60, 65, 25)).toBe(1.9);
});
