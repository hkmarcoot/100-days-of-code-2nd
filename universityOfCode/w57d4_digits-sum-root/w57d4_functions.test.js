/* ***************functions.test.js********************* */
const rootDigit = require("./w57d4_functions");

test("test 1", () => {
  expect(rootDigit(999888777)).toBe(9);
});

test("test 2", () => {
  expect(rootDigit(1111177999888777999888777999888777n)).toBe(1);
});

test("test 3", () => {
  expect(rootDigit(1238763636555555555555n)).toBe(6);
});

test("test 4", () => {
  expect(rootDigit(0)).toBe(0);
});
