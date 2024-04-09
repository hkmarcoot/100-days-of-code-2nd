/* ******************functions.test.js********************* */
const formatNum = require("./functions");

test("test 1", () => {
  expect(formatNum(1000)).toBe("1,000");
});

test("test 2", () => {
  expect(formatNum(1000000)).toBe("1,000,000");
});

test("test 3", () => {
  expect(formatNum(20)).toBe("20");
});

test("test 4", () => {
  expect(formatNum(0)).toBe("0");
});

test("test 5", () => {
  expect(formatNum(12948)).toBe("12,948");
});
