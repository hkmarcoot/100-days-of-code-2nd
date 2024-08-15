// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
import { nearestSq } from "../src/mySolution.js";

describe("Find Nearest square number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(nearestSq(1), 1, "nearestSq(1) = 1");
    assert.strictEqual(nearestSq(2), 1, "nearestSq(2) = 1");
    assert.strictEqual(nearestSq(10), 9, "nearestSq(10) = 9");
    assert.strictEqual(nearestSq(111), 121, "nearestSq(111) = 121");
    assert.strictEqual(nearestSq(9999), 10000, "nearestSq(9999) = 10000");
  });

  it("Small random tests (n <= 200000)", () => {
    for (var i = 0; i < 100; i++) {
      var num = Math.floor(Math.random() * 200000);
      var sol = Math.round(num ** 0.5) ** 2;
      assert.strictEqual(nearestSq(num), sol, `nearestSq(${num}) = ${sol}`);
    }
  });

  it("Big random tests (n <= 2000000)", () => {
    for (var i = 0; i < 100; i++) {
      var num = Math.floor(Math.random() * 2000000);
      var sol = Math.pow(Math.round(Math.pow(num, 0.5)), 2);
      assert.strictEqual(nearestSq(num), sol, `nearestSq(${num}) = ${sol}`);
    }
  });
});
