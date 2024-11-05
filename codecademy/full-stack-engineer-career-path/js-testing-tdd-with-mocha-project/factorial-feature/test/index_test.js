var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("if the output of 5! is equal to 120", () => {
      // Setup
      const expected = 120;
      // Exercise
      const number = 5;
      const result = Calculate.factorial(number);
      //Verify
      assert.equal(result, expected);
    });

    it("if the output of 3! is equal to 6", () => {
      // Setup
      const expected = 6;
      // Exercise
      const number = 3;
      const result = Calculate.factorial(number);
      //Verify
      assert.equal(result, expected);
    });

    it("returns 1 when you pass in 0", () => {
      // Setup
      const expected = 1;
      // Exercise
      const number = 0;
      const result = Calculate.factorial(number);
      //Verify
      assert.equal(result, expected);
    });
  });
});
