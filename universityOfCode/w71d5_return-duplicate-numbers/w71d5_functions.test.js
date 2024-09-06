/* ***************functions.test.js**************** */
const unrepeated = require("./w71d3_functions");

test("test 1", () => {
  expect(unrepeated("hello")).toBe("helo");
});

test("test 2", () => {
  expect(unrepeated("aaaaa")).toBe("a");
});

test("test 3", () => {
  expect(unrepeated("WWE!!!")).toBe("WE!");
});

test("test 4", () => {
  expect(unrepeated("call 911")).toBe("cal 91");
});

test("test 5", () => {
  expect(unrepeated("altwaff test")).toBe("altwf es");
});
