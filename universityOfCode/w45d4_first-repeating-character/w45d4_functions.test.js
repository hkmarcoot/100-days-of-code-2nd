/* *****************functions.test.js************** */
const firstRepeat = require("./functions");

test("Test 1", () => {
  expect(firstRepeat("legolas")).toBe("l");
});

test("Test 3", () => {
  expect(firstRepeat("Isildur")).toBe(-1);
});

test("Test 4", () => {
  expect(firstRepeat("Gollum")).toBe("l");
});

test("Test 5", () => {
  expect(firstRepeat("Galadriel")).toBe("a");
});

test("Test 6", () => {
  expect(firstRepeat("pippin")).toBe("p");
});

test("Test 7", () => {
  expect(firstRepeat("Saruman")).toBe("a");
});
