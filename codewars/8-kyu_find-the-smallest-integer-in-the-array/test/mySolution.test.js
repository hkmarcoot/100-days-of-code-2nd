// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
import { findSmallestInt } from "../src/mySolution.js";

try {
  // Support for previous solutions
  const sif = new SmallestIntegerFinder();
  findSmallestInt = sif.findSmallestInt;
} catch (e) {}

describe("Smallest Integer Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(
      findSmallestInt([78, 56, 232, 12, 8]),
      8,
      `findSmallestInt([78,56,232,12,8])`
    );
    assert.strictEqual(
      findSmallestInt([78, 56, 232, 12, 18]),
      12,
      `findSmallestInt([78,56,232,12,18])`
    );
    assert.strictEqual(
      findSmallestInt([78, 56, 232, 412, 228]),
      56,
      `findSmallestInt([78,56,232,412,228])`
    );
    assert.strictEqual(
      findSmallestInt([78, 56, 232, 12, 0]),
      0,
      `findSmallestInt([78,56,232,12,0])`
    );
    assert.strictEqual(
      findSmallestInt([1, 56, 232, 12, 8]),
      1,
      `findSmallestInt([1,56,232,12,8])`
    );
  });

  it("Random Tests", () => {
    function solv(arr) {
      let n = arr.sort((a, b) => a - b)[0];
      return { ans: n, desc: `findSmallestInt([${arr.join(",")}])` };
    }

    for (let i = 0; i < 100; i++) {
      let count = Math.floor(Math.random() * 100) + 100;
      let test = [];
      for (let x = 0; x < count; x++) {
        test.push(Math.floor(Math.random() * 100000000));
      }
      let ans = solv(test.slice());
      assert.strictEqual(findSmallestInt(test), ans.ans, ans.desc);
    }
  });
});
