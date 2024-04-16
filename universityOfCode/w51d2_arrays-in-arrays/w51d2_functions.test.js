/* ***************functions.test.js********************** */
const numOfSubbarrays = require("./functions");

test("test 1", () => {
  expect(
    numOfSubbarrays([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ])
  ).toBe(3);
});

test("test 2", () => {
  expect(numOfSubbarrays([[1, 2, 3]])).toBe(1);
});

test("test 3", () => {
  expect(numOfSubbarrays([[1, 2, 3]])).toBe(1);
});

test("test 4", () => {
  expect(
    numOfSubbarrays([
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ])
  ).toBe(4);
});
