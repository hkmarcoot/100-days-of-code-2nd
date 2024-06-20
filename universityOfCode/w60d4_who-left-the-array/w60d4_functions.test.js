/* ****************functions.test.js*************** */
const missing = require("./functions");

test("test 1", () => {
  expect(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8])).toBe(2);
});

test("test 2", () => {
  expect(
    missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"])
  ).toBe("ugly");
});

test("test 3", () => {
  expect(
    missing([true, true, false, false, true], [false, true, false, true])
  ).toBe(true);
});
