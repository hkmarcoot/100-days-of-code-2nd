/* *************functions.test.js************** */
const leftDigit = require("./w62d1_functions");

test("test 1", () => {
  expect(leftDigit("TrAdE2W1n95!")).toBe(2);
});

test("test 2", () => {
  expect(leftDigit("V3r1ta$")).toBe(3);
});

test("test 3", () => {
  expect(leftDigit("U//DertHe1nflu3nC3")).toBe(1);
});

test("test 4", () => {
  expect(leftDigit("J@v@5cR1PT")).toBe(5);
});

test("test 5", () => {
  expect(leftDigit("0nSlaUgh7*d3atH")).toBe(0);
});

test("test 6", () => {
  expect(leftDigit("F8andD3st1nY")).toBe(8);
});
