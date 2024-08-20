/* ************functions.test.js************* */
const tetra = require("./w57d1_functions");

test("test 1", () => {
  expect(tetra(1)).toBe(1);
});

test("test 2", () => {
  expect(tetra(2)).toBe(4);
});

test("test 3", () => {
  expect(tetra(3)).toBe(10);
});

test("test 4", () => {
  expect(tetra(4)).toBe(20);
});

test("test 5", () => {
  expect(tetra(5)).toBe(35);
});

test("test 6", () => {
  expect(tetra(9)).toBe(165);
});
