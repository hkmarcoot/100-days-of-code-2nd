/* ************************functions.test.js*************************** */
const primorial = require("./w44d3_functions");

test("1 primorial equal 2", () => {
  expect(primorial(1)).toBe(2);
});

test("2 primorial equal 6", () => {
  expect(primorial(2)).toBe(6);
});

test("3 primorial equal 30", () => {
  expect(primorial(3)).toBe(30);
});

test("4 primorial equal 210", () => {
  expect(primorial(4)).toBe(210);
});

test("5 primorial equal 2310", () => {
  expect(primorial(5)).toBe(2310);
});

test("6 primorial equal 30030", () => {
  expect(primorial(6)).toBe(30030);
});
