/* **********functions.test.js************* */
const pluralize = require("./functions");

test("test 1", () => {
  expect(pluralize(["cow", "pig", "cow", "cow"])).toEqual(["cows", "pig"]);
});

test("test 2", () => {
  expect(pluralize(["table", "table", "table"])).toEqual(["tables"]);
});

test("test 3", () => {
  expect(pluralize(["chair", "pencil", "arm"])).toEqual([
    "chair",
    "pencil",
    "arm",
  ]);
});

test("test 4", () => {
  expect(pluralize(["list"])).toEqual(["list"]);
});

test("test 5", () => {
  expect(
    pluralize([
      "set",
      "set",
      "tuple",
      "tuple",
      "string",
      "string",
      "string",
      "string",
      "integer",
    ])
  ).toEqual(["sets", "tuples", "strings", "integer"]);
});
