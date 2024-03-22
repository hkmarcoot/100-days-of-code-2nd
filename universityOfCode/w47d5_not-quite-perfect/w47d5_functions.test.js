/* ****************functions.test.js********************* */
const admirable = require("./functions");

test("Test 1", () => {
  expect(admirable(6)).toBe("Perfect");
});

test("Test 2", () => {
  expect(admirable(12)).toBe(2);
});

test("Test 3", () => {
  expect(admirable(18)).toBe("Neither");
});

test("Test 4", () => {
  expect(admirable(496)).toBe("Perfect");
});

test("Test 5", () => {
  expect(admirable(138)).toBe(6);
});

test("Test 6", () => {
  expect(admirable(612)).toBe("Neither");
});

test("Test 7", () => {
  expect(admirable(1876)).toBe(28);
});

test("Test 8", () => {
  expect(admirable(5456)).toBe(496);
});
