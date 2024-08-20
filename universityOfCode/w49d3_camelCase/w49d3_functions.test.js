/* ********************functions.test.js********************** */
const camelCasing = require("./w49d3_functions");

test("test 1", () => {
  expect(camelCasing("Hello World")).toBe("helloWorld");
});

test("test 2", () => {
  expect(camelCasing("snake_case")).toBe("snakeCase");
});

test("test 3", () => {
  expect(camelCasing("low high_HIGH")).toBe("lowHighHigh");
});

test("test 4", () => {
  expect(camelCasing("unEcEsSARilY_loNG_vArIablE_NaME")).toBe(
    "unecessarilyLongVariableName"
  );
});

test("test 5", () => {
  expect(camelCasing("camel casing")).toBe("camelCasing");
});
