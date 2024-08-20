/* ***************************functions.test.js***************************** */
const freeShipping = require("./w46d2_functions");

obj1 = { Shampoo: 5.99, "Rubber Ducks": 15.99 };
obj2 = { "Flatscreen TV": 399.99 };
obj3 = { Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 };
obj4 = { Scrabble: 12.32, Jenga: 5.55, Clue: 20.0 };
obj5 = {
  "Elephant Plushie": 40.55,
  "Octopus Plushie": 20.33,
  "Spongebob Plushie": 20.0,
};

test("Test 1", () => {
  expect(freeShipping(obj1)).toBe(false);
});

test("Test 2", () => {
  expect(freeShipping(obj2)).toBe(true);
});

test("Test 3", () => {
  expect(freeShipping(obj3)).toBe(true);
});

test("Test 4", () => {
  expect(freeShipping(obj4)).toBe(false);
});

test("Test 5", () => {
  expect(freeShipping(obj5)).toBe(true);
});
