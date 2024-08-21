/* ***********functions.test.js************** */
const neutralise = require("./w69d3_functions");

test("test 1", () => {
  expect(neutralise("--++--", "++--++")).toBe("000000");
});

test("test 2", () => {
  expect(neutralise("-+-+-+", "-+-+-+")).toBe("-+-+-+");
});

test("test 3", () => {
  expect(neutralise("-++-", "-+-+")).toBe("-+00");
});

test("test 4", () => {
  expect(neutralise("--++", "++++")).toBe("00++");
});

test("test 5", () => {
  expect(neutralise("+++--+---", "++----++-")).toBe("++0--000-");
});

test("test 6", () => {
  expect(neutralise("-----", "-----")).toBe("-----");
});

test("test 7", () => {
  expect(neutralise("-+", "++")).toBe("0+");
});

test("test 8", () => {
  expect(neutralise("--", "-+")).toBe("-0");
});

test("test 9", () => {
  expect(neutralise("-++", "+--")).toBe("000");
});

test("test 10", () => {
  expect(neutralise("++-++--++-", "-+++-++-++")).toBe("0+0+0000+0");
});
