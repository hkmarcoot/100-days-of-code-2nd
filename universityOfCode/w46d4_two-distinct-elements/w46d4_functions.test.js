/* *******************functions.test.js****************** */
const returnUnique = require("./w46d4_functions");

test("Test 1", () => {
  expect(returnUnique([1, 9, 8, 8, 7, 6, 1, 6])).toEqual([9, 7]);
});

test("Test 2", () => {
  expect(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1])).toEqual([2, 1]);
});
