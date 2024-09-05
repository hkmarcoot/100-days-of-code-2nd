/* ************functions.test.js************* */
const replaceVowel = require("./w71d4_functions");

test("test 1", () => {
  expect(replaceVowel("karachi")).toBe("k1r1ch3");
});

test("test 2", () => {
  expect(replaceVowel("dang")).toBe("d1ng");
});

test("test 3", () => {
  expect(replaceVowel("aen")).toBe("12n");
});

test("test 4", () => {
  expect(replaceVowel("chembur")).toBe("ch2mb5r");
});

test("test 5", () => {
  expect(replaceVowel("khandbari")).toBe("kh1ndb1r3");
});

test("test 6", () => {
  expect(replaceVowel("thamel")).toBe("th1m2l");
});
