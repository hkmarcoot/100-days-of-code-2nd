/* **********************functions.test.js*********************** */
const majorityVote = require("./w53d4_functions");

test("test 1", () => {
  expect(majorityVote(["A", "B", "B", "B", "A", "A"])).toBe(null);
});

test("test 2", () => {
  expect(majorityVote(["B", "B", "B"])).toBe("B");
});

test("test 3", () => {
  expect(majorityVote(["A", "B", "B"])).toBe("B");
});

test("test 4", () => {
  expect(majorityVote(["A", "A", "B"])).toBe("A");
});

test("test 5", () => {
  expect(majorityVote(["A", "A", "A", "B", "C", "A"])).toBe("A");
});

test("test 6", () => {
  expect(majorityVote(["B", "A", "B", "B", "C", "A", "B", "B"])).toBe("B");
});

test("test 7", () => {
  expect(majorityVote(["A", "B", "B", "A", "C", "C"])).toBe(null);
});

test("test 8", () => {
  expect(majorityVote(["A", "B"])).toBe(null);
});

test("test 9", () => {
  expect(majorityVote(["A"])).toBe("A");
});

test("test 10", () => {
  expect(majorityVote([])).toBe(null);
});
