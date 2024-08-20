/* **************functions.test.js*************** */
const cardHide = require("./w67d1_functions");

test("test 1", () => {
  expect(cardHide("1234123456785678")).toBe("************5678");
});

test("test 2", () => {
  expect(cardHide("8754456321113213")).toBe("************3213");
});

test("test 3", () => {
  expect(cardHide("35123413355523")).toBe("**********5523");
});
