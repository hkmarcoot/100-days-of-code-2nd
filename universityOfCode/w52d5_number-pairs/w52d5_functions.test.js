/* **************functions.test.js******************** */
const numberPairs = require("./w52d5_functions");

test("test 1", () => {
  expect(numberPairs("7 1 2 1 2 1 3 2")).toBe(2);
});

test("test 2", () => {
  expect(numberPairs("9 10 20 20 10 10 30 50 10 20")).toBe(3);
});

test("test 3", () => {
  expect(numberPairs("4 2 3 4 1")).toBe(0);
});

test("test 4", () => {
  expect(numberPairs("13 10 20 20 10 10 30 50 10 20 50 50 30 20")).toBe(6);
});

test("test 5", () => {
  expect(numberPairs("10 1 2 5 6 5 2 1 7 8 1")).toBe(3);
});

test("test 6", () => {
  expect(numberPairs("16 2 3 5 11 1 11 5 7 9 13 17 3 8 7 2 1")).toBe(6);
});

test("test 7", () => {
  expect(numberPairs("6 1 2 2 4 3 4")).toBe(2);
});
