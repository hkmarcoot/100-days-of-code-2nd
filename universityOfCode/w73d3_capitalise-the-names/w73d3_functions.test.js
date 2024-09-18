/* ************functions.test.js************ */
const capMe = require("./w73d3_functions");

test("test 1", () => {
  expect(capMe(["mavis", "senaida", "letty"])).toEqual([
    "Mavis",
    "Senaida",
    "Letty",
  ]);
});

test("test 2", () => {
  expect(capMe(["samuel", "MABELLE", "letitia", "meridith"])).toEqual([
    "Samuel",
    "Mabelle",
    "Letitia",
    "Meridith",
  ]);
});
