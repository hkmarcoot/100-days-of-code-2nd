/* ****************functions.test.js****************** */
const indexShuffle = require("./w68d1_functions");

test("test 1", () => {
  expect(indexShuffle("abcdef")).toBe("acebdf");
});

test("test 2", () => {
  expect(indexShuffle("abababab")).toBe("aaaabbbb");
});

test("test 3", () => {
  expect(indexShuffle("it was a beautiful day")).toBe("i a euiu atwsabatfldy");
});

test("test 4", () => {
  expect(indexShuffle("maybe")).toBe("myeab");
});

test("test 5", () => {
  expect(indexShuffle("holiday")).toBe("hldyoia");
});
