const { isPrefix, isSuffix } = require("./functions");

test("test 1", () => {
  expect(isPrefix("automation", "auto-")).toBe(true);
});

test("test 2", () => {
  expect(isPrefix("superfluous", "super-")).toBe(true);
});

test("test 3", () => {
  expect(isPrefix("oration", "mega-")).toBe(false);
});

test("test 4", () => {
  expect(isPrefix("retrospect", "sub-")).toBe(false);
});

test("test 5", () => {
  expect(isSuffix("arachnophobia", "-phobia")).toBe(true);
});

test("test 6", () => {
  expect(isSuffix("rhinoplasty", "-plasty")).toBe(true);
});

test("test 7", () => {
  expect(isSuffix("movement", "-scope")).toBe(false);
});

test("test 8", () => {
  expect(isSuffix("vocation", "-logy")).toBe(false);
});
