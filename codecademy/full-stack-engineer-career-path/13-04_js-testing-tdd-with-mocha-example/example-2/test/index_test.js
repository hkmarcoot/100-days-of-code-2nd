const assert = require("assert");
const Phrase = require("../index.js");

describe("Phrase", () => {
  describe(".initials", () => {
    it("raises an error if the parameter passed in is not a string", () => {
      // Setup
      const nameInput = 14;
      // Exercise
      const exercise = () => {
        Phrase.initials(nameInput);
      };
      // Verification
      assert.throws(exercise, /only use string/);
    });
  });
});
