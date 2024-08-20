/* ************************functions.test.js************************ */
const isSastry = require("./w47d3_functions");

test("Test 1", () => {
  expect(isSastry(183)).toBe(true);
});

test("Test 2", () => {
  expect(isSastry(184)).toBe(false);
});

test("Test 3", () => {
  expect(isSastry(106755)).toBe(true);
});
