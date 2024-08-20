/* ********************functions.test.js*************** */
const josephus = require("./w43d5_functions");

test("n = 41, i = 3, equal 31", () => {
  expect(josephus(41, 3)).toBe(31);
});

test("n = 35, i = 11, equal 18", () => {
  expect(josephus(35, 11)).toBe(18);
});
