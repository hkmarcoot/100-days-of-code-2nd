/* **************functions.test.js***************** */
const same = require("./w75d1_functions");

const f1 = same("PAPAFAM");
const f2 = same("University Of Code");
const f3 = same("");

test("test 1", () => {
  expect(f1()).toBe("PAPAFAM");
});

test("test 2", () => {
  expect(f2()).toBe("University Of Code");
});

test("test 3", () => {
  expect(f3()).toBe("");
});
