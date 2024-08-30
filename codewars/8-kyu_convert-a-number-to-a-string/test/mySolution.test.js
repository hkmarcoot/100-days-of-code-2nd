// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
import { numberToString } from "../src/mySolution.js";
// import pkg from "lodash";
// const { _ } = pkg;

describe("Tests", () => {
  it("fixed tests", () => {
    assert.strictEqual(numberToString(67), "67");
    assert.strictEqual(numberToString(79585), "79585");
    assert.notStrictEqual(numberToString(79585), 79585);
    assert.strictEqual(numberToString(1 + 2), "3");
    assert.strictEqual(numberToString(1 - 2), "-1");
  });

  it("random tests", () => {
    for (let run = 0; run < 200; ++run) {
      let num = Math.floor(Math.random() * 2000000 - 1000000);
      assert.strictEqual(
        numberToString(num),
        String(num),
        `Testing for num = ${num}`
      );
    }
  });
});
