/* ***********functions.test.js************** */
const specialReverse = require("./w72d3_functions");

test("test 1", () => {
  expect(specialReverse("word searches are super fun", "s")).toBe(
    "word sehcraes are repus fun"
  );
});

test("test 2", () => {
  expect(specialReverse("first man to walk on the moon", "m")).toBe(
    "first nam to walk on the noom"
  );
});

test("test 2", () => {
  expect(specialReverse("peter piper picked pickled peppers", "p")).toBe(
    "retep repip dekcip delkcip sreppep"
  );
});

test("test 2", () => {
  expect(specialReverse("he went to climb mount everest", "p")).toBe(
    "he went to climb mount everest"
  );
});
