/* ****************functions.test.js******************** */
const makeTitle = require("./functions");

test("test 1", () => {
  expect(makeTitle("I am a title")).toBe("I Am A Title");
});

test("test 2", () => {
  expect(makeTitle("I AM A TITLE")).toBe("I AM A TITLE");
});

test("test 3", () => {
  expect(makeTitle("i aM a tITLE")).toBe("I AM A TITLE");
});

test("test 4", () => {
  expect(makeTitle("the first letter of every word is capitalized")).toBe(
    "The First Letter Of Every Word Is Capitalized"
  );
});

test("test 5", () => {
  expect(makeTitle("I Like Pizza")).toBe("I Like Pizza");
});

test("test 6", () => {
  expect(makeTitle("Don't count your ChiCKens BeFore They HatCh")).toBe(
    "Don't Count Your ChiCKens BeFore They HatCh"
  );
});

test("test 7", () => {
  expect(makeTitle("All generalizations are false, including this one")).toBe(
    "All Generalizations Are False, Including This One"
  );
});

test("test 8", () => {
  expect(
    makeTitle("Me and my wife lived happily for twenty years and then we met.")
  ).toBe("Me And My Wife Lived Happily For Twenty Years And Then We Met.");
});

test("test 9", () => {
  expect(makeTitle("There are no stupid questions, just stupid people.")).toBe(
    "There Are No Stupid Questions, Just Stupid People."
  );
});

test("test 10", () => {
  expect(makeTitle("1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d")).toBe(
    "1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d"
  );
});

test("test 11", () => {
  expect(makeTitle("PIZZA PIZZA PIZZA")).toBe("PIZZA PIZZA PIZZA");
});
