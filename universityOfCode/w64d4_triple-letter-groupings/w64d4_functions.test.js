const threeLetterCollection = require("./w64d4_functions");

test("test 1", () => {
  expect(threeLetterCollection("slap")).toEqual(["lap", "sla"]);
});

test("test 2", () => {
  expect(threeLetterCollection("click")).toEqual(["cli", "ick", "lic"]);
});

test("test 3", () => {
  expect(threeLetterCollection("cat")).toEqual(["cat"]);
});

test("test 4", () => {
  expect(threeLetterCollection("hi")).toEqual([]);
});

test("test 5", () => {
  expect(threeLetterCollection("programming")).toEqual([
    "amm",
    "gra",
    "ing",
    "min",
    "mmi",
    "ogr",
    "pro",
    "ram",
    "rog",
  ]);
});

test("test 6", () => {
  expect(threeLetterCollection("antidisestablishmentarianism")).toEqual([
    "abl",
    "ani",
    "ant",
    "ari",
    "bli",
    "dis",
    "ent",
    "est",
    "hme",
    "ian",
    "idi",
    "ise",
    "ish",
    "ism",
    "lis",
    "men",
    "nis",
    "nta",
    "nti",
    "ria",
    "ses",
    "shm",
    "sta",
    "tab",
    "tar",
    "tid",
  ]);
});
