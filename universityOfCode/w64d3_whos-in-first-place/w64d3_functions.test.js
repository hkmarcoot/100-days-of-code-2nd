/* ***********functions.test.js************* */
const firstPlace = require("./functions");

test("test 1", () => {
  expect(firstPlace("====b===O===e===U=A==")).toBe("A");
});

test("test 2", () => {
  expect(firstPlace("e==B=Fe")).toBe("e");
});

test("test 3", () => {
  expect(firstPlace("proeNeoOJGnfl")).toBe("l");
});

test("test 4", () => {
  expect(firstPlace("F=============")).toBe("F");
});

test("test 5", () => {
  expect(firstPlace("C===A===R")).toBe("R");
});

test("test 6", () => {
  expect(firstPlace("p")).toBe("p");
});

test("test 7", () => {
  expect(firstPlace("==========================")).toBe("No car available");
});

test("test 8", () => {
  expect(firstPlace("")).toBe("No road available");
});
