/* *****************functions.test.js****************** */
const addNums = require("./functions");

test("test 1", () => {
  expect(addNums("2, 5, 1, 8, 4")).toBe(20);
});

test("test 2", () => {
  expect(addNums("1, 2, 3, 4, 5, 6, 7")).toBe(28);
});

test("test 3", () => {
  expect(
    addNums(
      "24, 7, -15, -28, -21, 6, 5, -6, 23, 24, -22, 30, -21, -10, -10, -12, 24, -18, -13, -27, 22, -30, -11, -13, 6, 7, 27, 1"
    )
  ).toBe(-51);
});
