/* *********************functions.test.js*************************** */
const recurIndex = require("./w49d5_functions");

test("test 1", () => {
  expect(recurIndex("DXTDXTXDTXD")).toMatchObject({ D: [0, 3] });
});

test("test 2", () => {
  expect(recurIndex("YXZXYTUVXWV")).toMatchObject({ X: [1, 3] });
});

test("test 3", () => {
  expect(recurIndex("YZTTZMNERXE")).toMatchObject({ T: [2, 3] });
});

test("test 4", () => {
  expect(recurIndex("AREDCBSDERD")).toMatchObject({ D: [3, 7] });
});

test("test 5", () => {
  expect(recurIndex("")).toMatchObject({});
});

test("test 6", () => {
  expect(recurIndex(null)).toMatchObject({});
});

test("test 7", () => {
  expect(recurIndex("KDXTDATTDDX")).toMatchObject({ D: [1, 4] });
});

test("test 8", () => {
  expect(recurIndex("AKEDCBERSDA")).toMatchObject({ E: [2, 6] });
});

test("test 9", () => {
  expect(recurIndex("DXKETRETXDK")).toMatchObject({ E: [3, 6] });
});

test("test 10", () => {
  expect(recurIndex("ABCKPEPGBCG")).toMatchObject({ P: [4, 6] });
});

test("test 11", () => {
  expect(recurIndex("KLMNONMLKOP")).toMatchObject({ N: [3, 5] });
});

test("test 12", () => {
  expect(recurIndex("ABCDEFGHIJK")).toMatchObject({});
});

test("test 13", () => {
  expect(recurIndex("ABCDEFGABCD")).toMatchObject({ A: [0, 7] });
});

test("test 14", () => {
  expect(recurIndex(undefined)).toMatchObject({});
});
