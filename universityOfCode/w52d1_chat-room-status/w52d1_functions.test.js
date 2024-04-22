/* ******************functions.test.js********************* */
const chatroomStatus = require("./functions");

test("test 1", () => {
  expect(chatroomStatus([])).toBe("no one online");
});

test("test 2", () => {
  expect(chatroomStatus(["becky325"])).toBe("becky325 online");
});

test("test 3", () => {
  expect(chatroomStatus(["becky325", "malcolm888"])).toBe(
    "becky325 and malcolm888 online"
  );
});

test("test 4", () => {
  expect(chatroomStatus(["becky325", "malcolm888", "fah32fa"])).toBe(
    "becky325, malcolm888 and 1 more online"
  );
});

test("test 5", () => {
  expect(chatroomStatus(["paRIE_to"])).toBe("paRIE_to online");
});

test("test 6", () => {
  expect(chatroomStatus(["s234f", "mailbox2"])).toBe(
    "s234f and mailbox2 online"
  );
});

test("test 7", () => {
  expect(
    chatroomStatus([
      "pap_ier44",
      "townieBOY",
      "panda321",
      "motor_bike5",
      "sandwichmaker833",
      "violinist91",
    ])
  ).toBe("pap_ier44, townieBOY and 4 more online");
});
