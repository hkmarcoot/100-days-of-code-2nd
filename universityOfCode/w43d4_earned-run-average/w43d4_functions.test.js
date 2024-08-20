/* *******************functions.test.js******************** */
const era = require("./w43d4_functions");

test("22 er and 99 ip equal 2.00", () => {
  expect(era(22, 99)).toBe(2.0);
});

test("23 er and 99.1 equal 2.08", () => {
  expect(era(23, 99.1)).toBe(2.08);
});

test("24 er and 99.2 equal 2.17", () => {
  expect(era(24, 99.2)).toBe(2.17);
});
