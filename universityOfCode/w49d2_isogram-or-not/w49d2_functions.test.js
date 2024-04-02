/* ********************functions.test.js************************* */
const isIsogram = require("./functions");

test("test 1", () => {
  expect(isIsogram("Algorism")).toBe(true);
});

test("Test 2", () => {
  expect(isIsogram("PasSword")).toBe(false);
});

test("Test 3", () => {
  expect(isIsogram("Dermatoglyphics")).toBe(true);
});

test("Test 4", () => {
  expect(isIsogram("Cat")).toBe(true);
});

test("Test 5", () => {
  expect(isIsogram("Filmography")).toBe(true);
});

test("Test 6", () => {
  expect(isIsogram("Consecutive")).toBe(false);
});

test("Test 7", () => {
  expect(isIsogram("Bankruptcies")).toBe(true);
});

test("Test 8", () => {
  expect(isIsogram("Unforgivable")).toBe(true);
});

test("Test 9", () => {
  expect(isIsogram("Unpredictably")).toBe(true);
});

test("Test 10", () => {
  expect(isIsogram("Moose")).toBe(false);
});
