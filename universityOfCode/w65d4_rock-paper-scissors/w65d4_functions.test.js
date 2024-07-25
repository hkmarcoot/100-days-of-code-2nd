/* *****************functions.test.js****************** */
const calculateScore = require("./functions");

test("test 1", () => {
  expect(
    calculateScore([
      ["R", "P"],
      ["R", "S"],
      ["S", "P"],
    ])
  ).toBe("Sonny");
});

test("test 2", () => {
  expect(
    calculateScore([
      ["R", "R"],
      ["S", "S"],
    ])
  ).toBe("Tie");
});

test("test 3", () => {
  expect(
    calculateScore([
      ["S", "R"],
      ["R", "S"],
      ["R", "R"],
    ])
  ).toBe("Tie");
});

test("test 4", () => {
  expect(
    calculateScore([
      ["S", "R"],
      ["P", "R"],
    ])
  ).toBe("Tie");
});

test("test 5", () => {
  expect(
    calculateScore([
      ["S", "S"],
      ["S", "P"],
      ["R", "S"],
      ["S", "R"],
      ["R", "R"],
    ])
  ).toBe("Sonny");
});

test("test 6", () => {
  expect(
    calculateScore([
      ["S", "R"],
      ["S", "R"],
      ["S", "R"],
      ["R", "S"],
      ["R", "S"],
    ])
  ).toBe("Jay");
});
