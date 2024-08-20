/* *************functions.test.js******************* */
const invert = require("./w60d3_functions");

test("test 1", () => {
  expect(invert("dLROW YM sI HsEt")).toBe("TeSh iS my worlD");
});

test("test 2", () => {
  expect(invert("This string is CASE and INDEX reversed")).toBe(
    "DESREVER xedni DNA esac SI GNIRTS SIHt"
  );
});
