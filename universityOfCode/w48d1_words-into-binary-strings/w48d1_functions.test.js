/* *************************functions.test.js***************************** */
const convertBinary = require("./functions");

test("Test 1", () => {
  expect(convertBinary("house")).toBe("01110");
});

test("Test 2", () => {
  expect(convertBinary("excLAIM")).toBe("0100000");
});

test("Test 3", () => {
  expect(convertBinary("moon")).toBe("0111");
});

test("Test 4", () => {
  expect(convertBinary("MOOn")).toBe("0111");
});

test("Test 5", () => {
  expect(convertBinary("topsyTurvy")).toBe("1111111111");
});
