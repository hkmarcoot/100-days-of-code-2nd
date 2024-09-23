// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { doubleInteger } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Double integer", () => {
  it("Fixed tests", () => {
    assert.strictEqual(doubleInteger(2), 4);
    assert.strictEqual(doubleInteger(4), 8);
    assert.strictEqual(doubleInteger(-10), -20);
    assert.strictEqual(doubleInteger(0), 0);
    assert.strictEqual(doubleInteger(100), 200);
  });
  it("Random tests", () => {
    for (let i = 100; i--; ) {
      const n = Math.floor(Math.random() * 1999) - 999;
      assert.strictEqual(doubleInteger(n), n + n);
    }
  });
});
