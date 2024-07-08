/* *************functions.test.js*************** */
const highLow = require("./functions");

test("test 1", () => {
  expect(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toBe("542 -214");
});

test("test 2", () => {
  expect(highLow("1 -1")).toBe("1 -1");
});

test("test 3", () => {
  expect(highLow("42")).toBe("42 42");
});
