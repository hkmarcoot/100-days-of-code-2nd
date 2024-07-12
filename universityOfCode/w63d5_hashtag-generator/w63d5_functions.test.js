const generateHashtag = require("./functions");

test("test 1", () => {
  expect(generateHashtag("")).toBe(false);
});

test("test 2", () => {
  expect(generateHashtag(" ".repeat(100))).toBe(false);
});

test("test 3", () => {
  expect(generateHashtag("Do We have A Hashtag")).toBe("#DoWeHaveAHashtag");
});

test("test 4", () => {
  expect(generateHashtag("Edabit")).toBe("#Edabit");
});

test("test 5", () => {
  expect(generateHashtag("Edabit Is Great")).toBe("#EdabitIsGreat");
});

test("test 6", () => {
  expect(generateHashtag("Edabit is great")).toBe("#EdabitIsGreat");
});

test("test 7", () => {
  expect(generateHashtag("eda" + " ".repeat(140) + "bit")).toBe("#EdaBit");
});

test("test 8", () => {
  expect(generateHashtag("e".repeat(121))).toBe("#E" + "e".repeat(120));
});

test("test 9", () => {
  expect(generateHashtag("e".repeat(140))).toBe(false);
});

test("test 10", () => {
  expect(generateHashtag("    Hello     World   ")).toBe("#HelloWorld");
});
