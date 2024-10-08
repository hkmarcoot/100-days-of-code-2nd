// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { century } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Basic Tests", function () {
  it("Sample Tests", function () {
    assert.strictEqual(century(1705), 18, "Testing for year 1705");
    assert.strictEqual(century(1900), 19, "Testing for year 1900");
    assert.strictEqual(century(1601), 17, "Testing for year 1601");
    assert.strictEqual(century(2000), 20, "Testing for year 2000");
    assert.strictEqual(century(89), 1, "Testing for year 89");
  });

  it("Random Tests", function () {
    function gC(y) {
      return Math.ceil(y / 100);
    }

    for (let i = 0; i < 200; i++) {
      let year = Math.ceil(Math.random() * 999999);
      assert.strictEqual(century(year), gC(year), "Testing for year " + year);
    }
  });
});
