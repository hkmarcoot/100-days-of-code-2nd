/* ****************functions.test.js******************* */
const { addsNum, adds1, adds10, adds5neg, adds0 } = require("./functions");

test("test 1", () => {
  expect(adds1(3)).toBe(4);
});

test("test 2", () => {
  expect(adds1(5.7)).toBe(6.7);
});

test("test 3", () => {
  expect(adds10(44)).toBe(54);
});

test("test 4", () => {
  expect(adds10(20)).toBe(30);
});

test("test 5", () => {
  expect(adds5neg(0)).toBe(-5);
});

test("test 6", () => {
  expect(adds5neg(77)).toBe(72);
});

test("test 7", () => {
  expect(adds0(77)).toBe(77);
});
