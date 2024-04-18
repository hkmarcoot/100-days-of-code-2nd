/* ******************functions.test.js*********************** */
const unmix = require("./functions");

test("test 1", () => {
  expect(unmix("123456")).toBe("214365");
});

test("test 2", () => {
  expect(unmix("hTsii  s aimex dpus rtni.g")).toBe(
    "This is a mixed up string."
  );
});

test("test 3", () => {
  expect(unmix("badce")).toBe("abcde");
});

test("test 4", () => {
  expect(unmix(" Imaf eeilgna l tilt eidzz!y")).toBe(
    "I am feeling a little dizzy!"
  );
});

test("test 5", () => {
  expect(unmix("")).toBe("");
});
