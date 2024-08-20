/* *********************functions.test.js*********************** */
const highestPair = require("./w46d5_functions");

test("Test 1", () => {
  expect(highestPair(["A", "A", "K", "K", "3"])).toEqual([true, "A"]);
});

test("Test 2", () => {
  expect(highestPair(["A", "K", "Q", "J", "10"])).toBe(false);
});

test("Test 3", () => {
  expect(highestPair(["A", "K", "K", "K", "Q"])).toEqual([true, "K"]);
});

test("Test 4", () => {
  expect(highestPair(["A", "3", "3", "4", "4"])).toEqual([true, "4"]);
});

test("Test 5", () => {
  expect(highestPair(["A", "K", "Q", "Q", "5"])).toEqual([true, "Q"]);
});
