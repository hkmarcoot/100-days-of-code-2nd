/* *************functions.test.js**************** */
const maskify = require("./functions");

test("test 1", () => {
  expect(maskify("4556364607935616")).toBe("############5616");
});

test("test 2", () => {
  expect(maskify("64607935616")).toBe("#######5616");
});

test("test 3", () => {
  expect(maskify("1")).toBe("1");
});

test("test 4", () => {
  expect(maskify("")).toBe("");
});

test("test 5", () => {
  expect(maskify("tBy>L/cMe+?<j:6n;C~H")).toBe("################;C~H");
});

test("test 6", () => {
  expect(maskify("12")).toBe("12");
});

test("test 7", () => {
  expect(maskify("8Ikhlf6yoxPOwi5cB014eWbRumj7vJ")).toBe(
    "##########################j7vJ"
  );
});

test("test 8", () => {
  expect(maskify("123")).toBe("123");
});

test("test 9", () => {
  expect(maskify(')E$aCU=e"_')).toBe('######=e"_');
});

test("test 10", () => {
  expect(maskify("2673951408")).toBe("######1408");
});

test("test 11", () => {
  expect(maskify("1234")).toBe("1234");
});
