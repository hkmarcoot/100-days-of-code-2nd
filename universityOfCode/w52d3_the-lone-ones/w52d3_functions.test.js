/* ****************functions.test.js****************** */
const countLoneOnes = require("./w52d3_functions");

test("test 1", () => {
  expect(countLoneOnes(101)).toBe(2);
});

test("test 2", () => {
  expect(countLoneOnes(1191)).toBe(1);
});

test("test 3", () => {
  expect(countLoneOnes(1111)).toBe(0);
});

test("test 4", () => {
  expect(countLoneOnes(11101)).toBe(1);
});

test("test 5", () => {
  expect(countLoneOnes(462)).toBe(0);
});

test("test 6", () => {
  expect(countLoneOnes(12131415161718191n)).toBe(9);
});

test("test 7", () => {
  expect(countLoneOnes(11231212111)).toBe(2);
});

test("test 8", () => {
  expect(countLoneOnes(1)).toBe(1);
});

test("test 9", () => {
  expect(countLoneOnes(0)).toBe(0);
});
