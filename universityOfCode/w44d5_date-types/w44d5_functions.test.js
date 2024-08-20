const dateChange = require("./w44d5_functions");

test("test 1", () => {
  expect(dateChange("I was born on 11/02/98")).toBe("I was born on 11/02/1998");
});

test("test 2", () => {
  expect(dateChange("I was born on 11/02/98 and what about you?")).toBe(
    "I was born on 11/02/1998 and what about you?"
  );
});

test("test 3", () => {
  expect(dateChange("I was born on 11.02.98")).toBe("I was born on 11.02.1998");
});

test("test 4", () => {
  expect(dateChange("I was born on 11|02|98")).toBe("I was born on 11|02|98");
});

test("test 5", () => {
  expect(dateChange("I was born on 02/11/19")).toBe("I was born on 02/11/2019");
});

test("test 6", () => {
  expect(dateChange("I was born on 02.11.19")).toBe("I was born on 02.11.2019");
});

test("test 7", () => {
  expect(dateChange("I was born on February, 02. 98.")).toBe(
    "I was born on February, 02. 1998."
  );
});

test("test 8", () => {
  expect(
    dateChange("I was born on January, 01. 15. and today is 08/10/20")
  ).toBe("I was born on January, 01. 2015. and today is 08/10/2020");
});

test("test 9", () => {
  expect(
    dateChange("I was born on January, 01. 15. and today is October, 08. 20.")
  ).toBe("I was born on January, 01. 2015. and today is October, 08. 2020.");
});

test("test 10", () => {
  expect(
    dateChange("I was born on Fakemonthy, 01. 15. dont change invalid dates")
  ).toBe("I was born on Fakemonthy, 01. 15. dont change invalid dates");
});
