/* ***********************functions.test.js************************ */
const sayHelloBye = require("./functions");

test("Test 1", () => {
  expect(sayHelloBye("jose", 1)).toBe("Hello Jose");
});

test("Test 2", () => {
  expect(sayHelloBye("barry", 1)).toBe("Hello Barry");
});

test("Test 3", () => {
  expect(sayHelloBye("jon", 0)).toBe("Bye Jon");
});

test("Test 4", () => {
  expect(sayHelloBye("sara", 0)).toBe("Bye Sara");
});
