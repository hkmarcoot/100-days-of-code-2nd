/* ***********************functions.test.js*********************** */
const asciiCapitalize = require("./w44d1_functions");

test("expected To Be oR NoT To Be", () => {
  expect(asciiCapitalize("to be or not to be")).toBe("To Be oR NoT To Be");
});

test("expected oH wHaT a BeauTiFuL moRNiNg.", () => {
  expect(asciiCapitalize("Oh what a beautiful morning.")).toBe(
    "oH wHaT a BeauTiFuL moRNiNg."
  );
});
