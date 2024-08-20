/* ************functions.test.js************* */
const validateBinary = require("./w67d2_functions");

const inData = [
  "00101101",
  "11000000",
  "11000001",
  "10010010",
  "10101101",
  "11000100",
  "11000101",
  "10010110",
  "10101101",
  "11001000",
  "11001001",
  "10011010",
];

const outData = [
  true,
  true,
  false,
  false,
  false,
  false,
  true,
  true,
  false,
  false,
  true,
  true,
];

const testData = [];

for (var i = 0; i < inData.length; i++) {
  testData.push([inData[i], outData[i]]);
}

test.each(testData)("myFunc work correctly for %s", (input, output) => {
  expect(validateBinary(input)).toBe(output);
});
