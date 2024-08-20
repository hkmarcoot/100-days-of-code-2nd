/* *****************functions.test.js*************************** */
const maxItems = require("./w50d4_functions");

test("test 1", () => {
  expect(maxItems(["$1", "$1", "$2"], "$3")).toBe(2);
});

test("test 2", () => {
  expect(maxItems(["$10", "$7", "$2", "$60"], "$20")).toBe(3);
});

test("test 3", () => {
  expect(maxItems(["$15", "$5", "$30", "$30", "$10"], "$2")).toBe(
    "Not enough funds!"
  );
});

test("test 4", () => {
  expect(maxItems(["$99", "$8"], "$9")).toBe(1);
});

test("test 5", () => {
  expect(maxItems(["$85", "$88", "$72", "$77", "$53"], "$56")).toBe(1);
});

test("test 6", () => {
  expect(maxItems(["$12", "$2", "$49", "$21", "$76", "$64"], "$37")).toBe(3);
});

test("test 7", () => {
  expect(
    maxItems(["$3", "$17", "$12", "$98", "$12", "$91", "$41", "$73"], "$116")
  ).toBe(5);
});
