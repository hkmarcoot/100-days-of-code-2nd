/* **************functions.test.js*************** */
const isSmooth = require("./w73d4_functions");

test("test 1", () => {
  expect(
    isSmooth("Marta appreciated deep perpendicular right trapezoids")
  ).toBe(true);
});

test("test 2", () => {
  expect(isSmooth("Someone is outside the doorway")).toBe(false);
});

test("test 3", () => {
  expect(isSmooth("Marigold daffodils streaming happily.")).toBe(false);
});

test("test 4", () => {
  expect(isSmooth("Mad dislikes sharp pointy yoyos")).toBe(true);
});
