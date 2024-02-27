/* **********************functions.test.js************************** */
const factorGroup = require("./functions");

test("12 has even number of factors", () => {
  expect(factorGroup(12)).toBe("even");
});

test("33 has even number of factors", () => {
  expect(factorGroup(33)).toBe("even");
});

test("36 has odd number of factors", () => {
  expect(factorGroup(36)).toBe("odd");
});

test("7 has even number of factors", () => {
  expect(factorGroup(7)).toBe("even");
});

test("1 has odd number of factors", () => {
  expect(factorGroup(1)).toBe("odd");
});

test("100 has odd number of factors", () => {
  expect(factorGroup(100)).toBe("odd");
});
