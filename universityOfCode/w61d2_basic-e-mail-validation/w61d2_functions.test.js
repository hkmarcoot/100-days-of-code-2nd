/* ***************functions.test.js****************** */
const validateEmail = require("./w61d2_functions");

test("test 1", () => {
  expect(validateEmail("@edabit.com")).toBe(false);
});

test("test 2", () => {
  expect(validateEmail("@edabit")).toBe(false);
});

test("test 3", () => {
  expect(validateEmail("matt@edabit.com")).toBe(true);
});

test("test 4", () => {
  expect(validateEmail("")).toBe(false);
});

test("test 5", () => {
  expect(validateEmail("hello.gmail@com")).toBe(false);
});

test("test 6", () => {
  expect(validateEmail("bill.gates@microsoft.com")).toBe(true);
});

test("test 7", () => {
  expect(validateEmail("hello@email")).toBe(false);
});

test("test 8", () => {
  expect(validateEmail("%^%$#%^%")).toBe(false);
});

test("test 9", () => {
  expect(validateEmail("www.email.com")).toBe(false);
});

test("test 10", () => {
  expect(validateEmail("email")).toBe(false);
});
