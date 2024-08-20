/* ************functions.test.js************** */
const century = require("./w66d2_functions");

test("test 1", () => {
  expect(century(1756)).toBe("18th century");
});

test("test 2", () => {
  expect(century(1555)).toBe("16th century");
});

test("test 3", () => {
  expect(century(1000)).toBe("10th century");
});

test("test 4", () => {
  expect(century(1001)).toBe("11th century");
});

test("test 5", () => {
  expect(century(2005)).toBe("21st century");
});

test("test 6", () => {
  expect(century(1789)).toBe("18th century");
});
