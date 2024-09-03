/* *************functions.test.js*************** */
const boomIntensity = require("./w71d2_functions");

test("test 1", () => {
  expect(boomIntensity(1)).toBe("boom");
});

test("test 2", () => {
  expect(boomIntensity(4)).toBe("boooom!");
});

test("test 3", () => {
  expect(boomIntensity(5)).toBe("BOOOOOM");
});

test("test 4", () => {
  expect(boomIntensity(10)).toBe("BOOOOOOOOOOM!");
});
