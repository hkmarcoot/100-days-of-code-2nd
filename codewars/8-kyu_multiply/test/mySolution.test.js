// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
import { multiply } from "../src/mySolution.js";

describe("Multiply", () => {
  it("fixed tests", () => {
    assert.strictEqual(multiply(1, 1), 1);
    assert.strictEqual(multiply(2, 1), 2);
    assert.strictEqual(multiply(2, 2), 4);
    assert.strictEqual(multiply(3, 5), 15);
    assert.strictEqual(multiply(5, 0), 0);
    assert.strictEqual(multiply(0, 5), 0);
    assert.strictEqual(multiply(0, 0), 0);
  });

  it("random tests", () => {
    for (let i = 0; i < 100; i++) {
      let [a, b] = [(Math.random() * 100) | 0, (Math.random() * 100) | 0];
      assert.strictEqual(multiply(a, b), a * b);
    }
  });
});
