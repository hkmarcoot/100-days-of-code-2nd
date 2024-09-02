const reverseImage = require("./w71d1_functions");

test("test 1", () => {
  expect(
    reverseImage([
      [1, 0, 0],

      [0, 1, 0],

      [0, 0, 1],
    ])
  ).toEqual([
    [0, 1, 1],

    [1, 0, 1],

    [1, 1, 0],
  ]);
});

test("test 2", () => {
  expect(
    reverseImage([
      [1, 0, 0, 0, 0],

      [1, 0, 0, 1, 1],

      [1, 1, 1, 1, 1],

      [1, 1, 1, 1, 0],

      [1, 1, 1, 0, 0],
    ])
  ).toEqual([
    [0, 1, 1, 1, 1],

    [0, 1, 1, 0, 0],

    [0, 0, 0, 0, 0],

    [0, 0, 0, 0, 1],

    [0, 0, 0, 1, 1],
  ]);
});
