/* ****************functions.test.js********************** */
const possibleBonus = require("./w54d3_functions");

test("test 1", () => {
  expect(possibleBonus(3, 7)).toBe(true);
});

test("test 2", () => {
  expect(possibleBonus(0, 6)).toBe(true);
});

test("test 3", () => {
  expect(possibleBonus(1, 6)).toBe(true);
});

test("test 4", () => {
  expect(possibleBonus(2, 6)).toBe(true);
});

test("test 5", () => {
  expect(possibleBonus(3, 6)).toBe(true);
});

test("test 6", () => {
  expect(possibleBonus(4, 6)).toBe(true);
});

test("test 7", () => {
  expect(possibleBonus(5, 6)).toBe(true);
});

test("test 8", () => {
  expect(possibleBonus(6, 6)).toBe(false);
});

test("test 9", () => {
  expect(possibleBonus(7, 6)).toBe(false);
});

test("test 10", () => {
  expect(possibleBonus(23, 27)).toBe(true);
});

test("test 11", () => {
  expect(possibleBonus(1, 9)).toBe(false);
});

test("test 12", () => {
  expect(possibleBonus(5, 3)).toBe(false);
});
