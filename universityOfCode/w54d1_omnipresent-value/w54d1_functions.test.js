/* **********************functions.test.js************************* */
const isOmnipresent = require("./w54d1_functions");

test("test 1", () => {
  expect(
    isOmnipresent(
      [
        [1, 1],
        [1, 3],
        [5, 1],
        [6, 1],
      ],
      1
    )
  ).toBe(true);
});

test("test 2", () => {
  expect(
    isOmnipresent(
      [
        [1, 1],
        [1, 3],
        [5, 1],
        [6, 1],
      ],
      6
    )
  ).toBe(false);
});

test("test 3", () => {
  expect(isOmnipresent([[5], [5], [5], [6, 5]], 5)).toBe(true);
});

test("test 4", () => {
  expect(isOmnipresent([[5], [5], [5], [6, 5]], 6)).toBe(false);
});

test("test 5", () => {
  expect(
    isOmnipresent(
      [
        [5, 1],
        [5, 1],
        [5, 1],
        [6, 5, 1],
      ],
      1
    )
  ).toBe(true);
});
