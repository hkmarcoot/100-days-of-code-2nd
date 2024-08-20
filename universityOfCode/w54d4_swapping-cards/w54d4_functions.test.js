/* ******************functions.test.js********************** */
const swapCards = require("./w54d4_functions");

test("test 1", () => {
  expect(swapCards(41, 98)).toBe(true);
});

test("test 2", () => {
  expect(swapCards(12, 28)).toBe(true);
});

test("test 3", () => {
  expect(swapCards(67, 53)).toBe(false);
});

test("test 4", () => {
  expect(swapCards(77, 54)).toBe(false);
});

test("test 5", () => {
  expect(swapCards(45, 23)).toBe(false);
});

test("test 6", () => {
  expect(swapCards(22, 34)).toBe(true);
});

test("test 7", () => {
  expect(swapCards(24, 12)).toBe(false);
});
