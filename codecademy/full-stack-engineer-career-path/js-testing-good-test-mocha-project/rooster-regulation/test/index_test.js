const assert = require("assert");
const Rooster = require("../index");

describe("For Rooster", () => {
  describe("For the announceDawn method", () => {
    it("Returns a rooster call", () => {
      // Define expected output (Setup)
      const expected = "cock-a-doodle-doo!";

      // Call Rooster.announceDawn and store result in variable (Exercise)
      const result = Rooster.announceDawn();

      // Use an assert method to compare actual and expected result (Verify)
      assert.strictEqual(expected, result);

      // (Teardown optional)
    });
  });

  describe("For the timeAtDawn method", () => {
    it("Returns its argument as a string", () => {
      // Setup
      expected = "string";

      // Exercise
      result = typeof Rooster.timeAtDawn(12);

      // Verify
      assert.strictEqual(expected, result);
    });

    it("Throws an error if passed a number less than 0", () => {
      assert.throws(() => {
        Rooster.timeAtDawn(-2);
      }, RangeError);
    });

    it("Throws an error if passed a number greater than 23", () => {
      assert.throws(() => {
        Rooster.timeAtDawn(25);
      }, RangeError);
    });
  });
});
