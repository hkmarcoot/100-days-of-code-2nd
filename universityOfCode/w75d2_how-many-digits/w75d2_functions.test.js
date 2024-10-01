/* ****************functions.test.js******************* */
const digits = require("./w75d2_functions");

test("test 1", () => {
  expect(digits(13124)).toBe(5);
});

test("test 2", () => {
  expect(digits(-12381428)).toBe(8);
});
