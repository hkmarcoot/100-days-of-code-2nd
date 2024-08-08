const encrypt = require("./functions");

test("test 1", () => {
  expect(encrypt("karaca")).toBe("0c0r0kaca");
});

test("test 2", () => {
  expect(encrypt("burak")).toBe("k0r3baca");
});

test("test 3", () => {
  expect(encrypt("banana")).toBe("0n0n0baca");
});

test("test 4", () => {
  expect(encrypt("alpaca")).toBe("0c0pl0aca");
});

test("test 5", () => {
  expect(encrypt("hello")).toBe("2ll1haca");
});
