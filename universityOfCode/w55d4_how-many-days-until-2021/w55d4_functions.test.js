/* *************functions.test.js****************** */
const daysUntil2021 = require("./w55d4_functions");

test("test 1", () => {
  expect(daysUntil2021("12/29/2020")).toBe("3 days");
});

test("test 2", () => {
  expect(daysUntil2021("1/1/2020")).toBe("366 days");
});

test("test 3", () => {
  expect(daysUntil2021("2/28/2020")).toBe("308 days");
});

test("test 4", () => {
  expect(daysUntil2021("6/30/2020")).toBe("185 days");
});

test("test 5", () => {
  expect(daysUntil2021("10/22/2020")).toBe("71 days");
});

test("test 6", () => {
  expect(daysUntil2021("12/31/2020")).toBe("1 day");
});
