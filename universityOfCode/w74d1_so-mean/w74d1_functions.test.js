/* **************functions.test.js************** */
const mean = require("./w74d1_functions");

test("test 1", () => {
  expect(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])).toBe(2.55);
});

test("test 2", () => {
  expect(mean([324, 543, 654, 9876])).toBe(2849.25);
});
