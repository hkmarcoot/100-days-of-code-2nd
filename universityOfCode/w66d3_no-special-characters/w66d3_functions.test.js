/* *************functions.test.js************** */
const removeSpecialCharacters = require("./functions");

test("test 1", () => {
  expect(removeSpecialCharacters("The quick brown fox!")).toBe(
    "The quick brown fox"
  );
});

test("test 2", () => {
  expect(removeSpecialCharacters("%fd76$fd(-)6GvKlO.")).toBe("fd76fd-6GvKlO");
});

test("test 3", () => {
  expect(removeSpecialCharacters("D0n$c sed 0di0 du1")).toBe(
    "D0nc sed 0di0 du1"
  );
});

test("test 4", () => {
  expect(removeSpecialCharacters("cat_pic.jpeg")).toBe("cat_picjpeg");
});

test("test 5", () => {
  expect(removeSpecialCharacters("519-555-8093")).toBe("519-555-8093");
});

test("test 6", () => {
  expect(removeSpecialCharacters("h-d+=rf[]_{}<>.,`~!@#$%^&*(|)")).toBe(
    "h-drf_"
  );
});

test("test 7", () => {
  expect(
    removeSpecialCharacters(
      "Etiam#!!!!!,,, [`po%rta ~sem!] {male*su-ada} (ma*gna) mo^llis... eui$smod???"
    )
  ).toBe("Etiam porta sem malesu-ada magna mollis euismod");
});
