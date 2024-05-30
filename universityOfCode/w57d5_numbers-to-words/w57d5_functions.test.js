/* ****************functions.test.js******************* */
const numToEng = require("./functions");

test("test 1", () => {
  expect(numToEng(0)).toBe("zero");
});

test("test 2", () => {
  expect(numToEng(26)).toBe("twenty six");
});

test("test 3", () => {
  expect(numToEng(519)).toBe("five hundred nineteen");
});

test("test 4", () => {
  expect(numToEng(106)).toBe("one hundred six");
});

test("test 5", () => {
  expect(numToEng(999)).toBe("nine hundred ninety nine");
});
