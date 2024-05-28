/* *****************functions.test.js******************** */
const areaOfCountry = require("./functions");

test("test 1", () => {
  expect(areaOfCountry("USA", 9372610)).toBe(
    "USA is 6.29% of the total world's landmass"
  );
});

test("test 2", () => {
  expect(areaOfCountry("Russia", 17098242)).toBe(
    "Russia is 11.48% of the total world's landmass"
  );
});
