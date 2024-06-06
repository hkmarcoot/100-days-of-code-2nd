/* ************functions.test.js*************** */
const lcm = require("./functions");

test("test 1", () => {
  expect(lcm(6, 10)).toBe(30);
});

test("test 2", () => {
  expect(lcm(30, 60)).toBe(60);
});

test("test 3", () => {
  expect(lcm(10000, 333)).toBe(3330000);
});

test("test 4", () => {
  expect(lcm(75, 135)).toBe(675);
});

test("test 5", () => {
  expect(lcm(102, 2)).toBe(102);
});
