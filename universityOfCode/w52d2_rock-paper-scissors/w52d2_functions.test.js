/* ****************functions.test.js******************** */
const rps = require("./functions");

test("test 1", () => {
  expect(rps("Rock", "Paper")).toBe("The winner is p2");
});

test("test 2", () => {
  expect(rps("Scissors", "Rock")).toBe("The winner is p2");
});

test("test 3", () => {
  expect(rps("Scissors", "Paper")).toBe("The winner is p1");
});

test("test 4", () => {
  expect(rps("Paper", "Rock")).toBe("The winner is p1");
});

test("test 5", () => {
  expect(rps("Paper", "Paper")).toBe("It's a draw");
});

test("test 6", () => {
  expect(rps("Rock", "Rock")).toBe("It's a draw");
});
