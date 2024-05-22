/* ***************functions.test.js******************* */
const validDivision = require("./functions");

test("test 1", () => {
  expect(validDivision("6/3")).toBe(true);
});

test("test 2", () => {
  expect(validDivision("30/25")).toBe(false);
});

test("test 3", () => {
  expect(validDivision("0/3")).toBe(true);
});

test("test 4", () => {
  expect(validDivision("13/12")).toBe(false);
});

test("test 5", () => {
  expect(validDivision("329/329")).toBe(true);
});

test("test 6", () => {
  expect(validDivision("0/0")).toBe("invalid");
});

test("test 7", () => {
  expect(validDivision("10/0")).toBe("invalid");
});

test("test 8", () => {
  expect(validDivision("20/5")).toBe(true);
});
