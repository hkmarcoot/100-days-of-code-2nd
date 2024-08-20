/* ***************functions.test.js**************** */
const reverse = require("./w61d3_functions");

test("test 1", () => {
  expect(reverse("Reverse")).toBe("esreveR");
});

test("test 2", () => {
  expect(reverse("This is a typical sentence.")).toBe(
    "This is a lacipyt .ecnetnes"
  );
});

test("test 3", () => {
  expect(reverse("The dog is big.")).toBe("The dog is big.");
});

test("test 4", () => {
  expect(
    reverse(
      "Reverse the order of every word greater than or equal to five characters."
    )
  ).toBe(
    "esreveR the redro of yreve word retaerg than or lauqe to five .sretcarahc"
  );
});

test("test 5", () => {
  expect(
    reverse("Lets all be unique together until we realise we are all the same.")
  ).toBe("Lets all be euqinu rehtegot litnu we esilaer we are all the .emas");
});

test("test 6", () => {
  expect(reverse("The old apple revels in its authority.")).toBe(
    "The old elppa slever in its .ytirohtua"
  );
});

test("test 7", () => {
  expect(reverse("The shooter says goodbye to his love.")).toBe(
    "The retoohs says eybdoog to his .evol"
  );
});

test("test 8", () => {
  expect(reverse("Please wait outside of the house.")).toBe(
    "esaelP wait edistuo of the .esuoh"
  );
});

test("test 9", () => {
  expect(reverse("Two seats were vacant.")).toBe("Two staes were .tnacav");
});

test("test 10", () => {
  expect(reverse("Sixty-Four comes asking for bread.")).toBe(
    "ruoF-ytxiS semoc gniksa for .daerb"
  );
});
