// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
import { positiveSum } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(positiveSum([1, 2, 3, 4, 5]), 15);
    assert.strictEqual(positiveSum([1, -2, 3, 4, 5]), 13);
    assert.strictEqual(positiveSum([]), 0);
    assert.strictEqual(positiveSum([-1, -2, -3, -4, -5]), 0);
    assert.strictEqual(positiveSum([-1, 2, 3, 4, -5]), 9);
  });
});

describe("Random tests", () => {
  function sol(arr) {
    return arr.reduce((x, y) => x + (y > 0 ? y : 0), 0);
  }

  function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (var i = 0; i < 100; i++) {
    let arr = Array.from({ length: randint(5, 120) }, (_, i) =>
      randint(-100, 100)
    );
    let expected = sol(arr.slice());
    it(`positiveSum(${JSON.stringify(arr)}) should equal ${expected}`, () => {
      assert.strictEqual(positiveSum(arr), expected);
    });
  }
});
