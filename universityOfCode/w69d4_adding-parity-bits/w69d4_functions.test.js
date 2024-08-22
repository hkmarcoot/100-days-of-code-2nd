const addParityBit = require("./w69d4_functions");

test("test 1", () => {
  expect(addParityBit("0010110")).toBe("00101101");
});

test("test 2", () => {
  expect(addParityBit("1100000")).toBe("11000000");
});

test("test 3", () => {
  expect(addParityBit("1111111")).toBe("11111111");
});

test("test 4", () => {
  expect(addParityBit("1111011")).toBe("11110110");
});

test("test 5", () => {
  expect(addParityBit("1010110")).toBe("10101100");
});

test("test 6", () => {
  expect(addParityBit("1100110")).toBe("11001100");
});
