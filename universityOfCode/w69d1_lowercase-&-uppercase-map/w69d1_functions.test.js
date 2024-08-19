/* ***********functions.test.js************* */
const mapping = require("./functions");

test("test 1", () => {
  expect(mapping(["a", "b", "c"])).toEqual({ a: "A", b: "B", c: "C" });
});

test("test 2", () => {
  expect(mapping(["p", "s", "t"])).toEqual({ p: "P", s: "S", t: "T" });
});

test("test 3", () => {
  expect(mapping(["a", "v", "y", "z"])).toEqual({
    a: "A",
    v: "V",
    y: "Y",
    z: "Z",
  });
});
