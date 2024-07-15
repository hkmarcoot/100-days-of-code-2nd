/* *************functions.test.js***************** */
const inkLevels = require("./functions");

test("test 1", () => {
  expect(
    inkLevels({
      cyan: 23,

      magenta: 12,

      yellow: 10,
    })
  ).toBe(10);
});

test("test 2", () => {
  expect(
    inkLevels({
      cyan: 432,

      magenta: 543,

      yellow: 777,
    })
  ).toBe(432);
});

test("test 3", () => {
  expect(
    inkLevels({
      cyan: 700,

      magenta: 700,

      yellow: 0,
    })
  ).toBe(0);
});

test("test 4", () => {
  expect(
    inkLevels({
      cyan: 70,

      magenta: 700,

      yellow: 1,
    })
  ).toBe(1);
});

test("test 5", () => {
  expect(
    inkLevels({
      cyan: 6543,

      magenta: 74543,

      yellow: 2345678,
    })
  ).toBe(6543);
});

test("test 6", () => {
  expect(
    inkLevels({
      cyan: 1,

      magenta: 1,

      yellow: 1,
    })
  ).toBe(1);
});

test("test 7", () => {
  expect(
    inkLevels({
      cyan: 700,

      magenta: 700,

      yellow: 700,
    })
  ).toBe(700);
});
