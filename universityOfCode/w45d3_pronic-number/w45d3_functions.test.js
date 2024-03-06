/* ********************functions.test.js********************** */
const isHeteromecic = require("./functions");

var input = [
  0, 2, 7, 110, 136, 156, 182, 218, 250, 272, 306, 362, 380, 422, 462, 600,
];

var output = [
  true,
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  true,
];

describe("All Test", () => {
  input.forEach((x, index) => {
    var testNum = index + 1;
    test(`Test ${testNum}`, () => {
      expect(isHeteromecic(input[i])).toBe(output[i]);
    });
  });
});
