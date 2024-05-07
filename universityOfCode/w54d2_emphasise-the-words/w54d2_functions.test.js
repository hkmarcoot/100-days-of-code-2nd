/* ******************functions.test.js*********************** */
const emphasise = require("./functions");

test("test 1", () => {
  expect(emphasise("hello world")).toBe("Hello World");
});

test("test 2", () => {
  expect(emphasise("GOOD MORNING")).toBe("Good Morning");
});

test("test 3", () => {
  expect(emphasise("99 red balloons!")).toBe("99 Red Balloons!");
});

test("test 4", () => {
  expect(emphasise("1 2 3 4 5 6 7 8 9")).toBe("1 2 3 4 5 6 7 8 9");
});

test("test 5", () => {
  expect(emphasise("")).toBe("");
});

test("test 6", () => {
  expect(emphasise("joshua senoron")).toBe("Joshua Senoron");
});
