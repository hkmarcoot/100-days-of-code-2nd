/* *********************functions.test.js********************** */
const reverseCase = require("./w50d1_functions");

test("test 1", () => {
  expect(reverseCase("Happy Birthday")).toBe("hAPPY bIRTHDAY");
});

test("test 2", () => {
  expect(reverseCase("MANY THANKS")).toBe("many thanks");
});

test("test 3", () => {
  expect(reverseCase("sPoNtAnEoUs")).toBe("SpOnTaNeOuS");
});

test("test 4", () => {
  expect(reverseCase("eXCELLENT, yOuR mAJESTY")).toBe(
    "Excellent, YoUr Majesty"
  );
});
