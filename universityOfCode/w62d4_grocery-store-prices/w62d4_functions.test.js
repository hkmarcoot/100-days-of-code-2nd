/* ***************functions.test.js***************** */
const getPrices = require("./w62d4_functions");

test("test 1", () => {
  expect(
    getPrices([
      "ice cream ($5.99)",
      "banana ($0.20)",
      "sandwich ($8.50)",
      "soup ($1.99)",
    ])
  ).toEqual([5.99, 0.2, 8.5, 1.99]);
});

test("test 2", () => {
  expect(getPrices(["salad ($4.99)"])).toEqual([4.99]);
});
