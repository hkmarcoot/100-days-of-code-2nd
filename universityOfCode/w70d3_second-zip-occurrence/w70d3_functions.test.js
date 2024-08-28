/* ***************functions.test.js*********** */
const findZip = require("./w70d3_functions");

test("test 1", () => {
  expect(findZip("all zip files are zipped")).toBe(18);
});

test("test 2", () => {
  expect(findZip("all zip files are compressed")).toBe(-1);
});

test("test 3", () => {
  expect(
    findZip(
      "We believe university-level zip education can be both high quality and low cost. Using the economics of the Internet, we've connected some of the greatest teachers to hundreds of thousands of students all over the world."
    )
  ).toBe(-1);
});

test("test 4", () => {
  expect(
    findZip(
      "Zip is a file format used for data compression and archiving. A zip file contains one or more files that have been compressed, to reduce file size, or stored as is. The zip file format permits a number of compression algorithms."
    )
  ).toBe(169);
});
