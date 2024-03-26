/* *************************functions.test.js************************* */
const removeABC = require("./functions");

test("Test 1", () => {
  expect(removeABC("This might be a bit hard")).toBe("This might e  it hrd");
});

test("Test 2", () => {
  expect(removeABC("This is awesome")).toBe("This is wesome");
});

test("Test 3", () => {
  expect(removeABC("hello world!")).toBe(null);
});

test("Test 4", () => {
  expect(removeABC("coding is fun!")).toBe("oding is fun!");
});

test("Test 5", () => {
  expect(removeABC("")).toBe(null);
});
