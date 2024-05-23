/* ********************functions.test.js***************************** */
const insertWhitespace = require("./functions");

test("test 1", () => {
  expect(insertWhitespace("SheWalksToTheBeach")).toBe("She Walks To The Beach");
});

test("test 2", () => {
  expect(insertWhitespace("MarvinTalksTooMuch")).toBe("Marvin Talks Too Much");
});

test("test 3", () => {
  expect(insertWhitespace("HopelesslyDevotedToYou")).toBe(
    "Hopelessly Devoted To You"
  );
});

test("test 4", () => {
  expect(insertWhitespace("EvenTheBestFallDownSometimes")).toBe(
    "Even The Best Fall Down Sometimes"
  );
});

test("test 5", () => {
  expect(insertWhitespace("TheGreatestUpsetInHistory")).toBe(
    "The Greatest Upset In History"
  );
});
