/* *************functions.test.js*************** */
const getDay = require("./functions");

test("test 1", () => {
  expect(getDay("12/07/2016")).toBe("Wednesday");
});

test("test 2", () => {
  expect(getDay("12/08/2011")).toBe("Thursday");
});

test("test 3", () => {
  expect(getDay("09/04/2016")).toBe("Sunday");
});

test("test 4", () => {
  expect(getDay("06/08/2012")).toBe("Friday");
});

test("test 5", () => {
  expect(getDay("08/13/2019")).toBe("Tuesday");
});
