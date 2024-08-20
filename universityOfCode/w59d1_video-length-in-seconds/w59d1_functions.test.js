/* ***************functions.test.js******************* */
const minutesToSeconds = require("./w59d1_functions");

test("test 1", () => {
  expect(minutesToSeconds("01:00")).toBe(60);
});

test("test 2", () => {
  expect(minutesToSeconds("13:56")).toBe(836);
});

test("test 3", () => {
  expect(minutesToSeconds("10:60")).toBe(false);
});

test("test 4", () => {
  expect(minutesToSeconds("132:21")).toBe(7941);
});

test("test 5", () => {
  expect(minutesToSeconds("132:271")).toBe(false);
});

test("test 6", () => {
  expect(minutesToSeconds("01:30")).toBe(90);
});

test("test 7", () => {
  expect(minutesToSeconds("10:00")).toBe(600);
});
