/* *************functions.test.js**************** */
const oddOrEven = require("./w75d4_functions");

test("test 1", () => {
  expect(oddOrEven(43)).toBe("ODD");
});

test("test 2", () => {
  expect(oddOrEven(373)).toBe("ODD");
});

test("test 3", () => {
  expect(oddOrEven(55551)).toBe("ODD");
});

test("test 4", () => {
  expect(oddOrEven(694)).toBe("ODD");
});

test("test 5", () => {
  expect(oddOrEven(4433)).toBe("EVEN");
});

test("test 6", () => {
  expect(oddOrEven(11)).toBe("EVEN");
});

test("test 7", () => {
  expect(oddOrEven(211112)).toBe("EVEN");
});
