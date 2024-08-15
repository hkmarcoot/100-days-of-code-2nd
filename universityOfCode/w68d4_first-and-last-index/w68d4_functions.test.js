/* *************functions.test.js***************** */
const charIndex = require("./functions");

test("test 1", () => {
  expect(charIndex("hello", "l")).toEqual([2, 3]);
});

test("test 2", () => {
  expect(charIndex("circumlocution", "r")).toEqual([2, 2]);
});

test("test 3", () => {
  expect(charIndex("circumlocution", "i")).toEqual([1, 11]);
});

test("test 4", () => {
  expect(charIndex("circumlocution", "c")).toEqual([0, 8]);
});

test("test 5", () => {
  expect(charIndex("happy", "h")).toEqual([0, 0]);
});

test("test 6", () => {
  expect(charIndex("happy", "p")).toEqual([2, 3]);
});

test("test 7", () => {
  expect(charIndex("happy", "e")).toBe(undefined);
});
