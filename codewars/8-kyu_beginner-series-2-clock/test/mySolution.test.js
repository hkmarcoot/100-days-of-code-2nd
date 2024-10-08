// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { past } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Fixed Tests", () => {
  before("Security tests", () => {
    //######Security Tests######
    if (Math.random == undefined)
      Test.assertEquals(false, true, "Math Object must contain random Method!");
    if (Math.floor == undefined)
      Test.assertEquals(false, true, "Math Object must contain floor Method!");
    if (
      Math.random.toString().indexOf("[native code]") == -1 ||
      Math.random.toString().length != 35
    )
      Test.assertEquals(false, true, "Math.random method must be Native!");
    if (
      Math.floor.toString().indexOf("[native code]") == -1 ||
      Math.floor.toString().length != 34
    )
      Test.assertEquals(false, true, "Math.floor method must be Native!");
    //######Security Tests######
  });

  function dotest(h, m, s, ans) {
    assert.strictEqual(
      past(h, m, s),
      ans,
      `Incorrect answer for h=${h}, m=${m}, s=${s}`
    );
  }

  it("Fixed tests", () => {
    dotest(0, 1, 1, 61000);
    dotest(1, 1, 1, 3661000);
    dotest(0, 0, 0, 0);
    dotest(1, 0, 1, 3601000);
    dotest(1, 0, 0, 3600000);
  });

  it("Random tests", () => {
    function genTests() {
      let tests = [];
      let ans = (h, m, s) => 1000 * (h * 3600 + m * 60 + s);

      for (let i = 0; i < 100; i++) {
        let test = {};
        test.h = Math.floor(Math.random() * 24);
        test.m = Math.floor(Math.random() * 60);
        test.s = Math.floor(Math.random() * 60);
        test.ans = ans(test.h, test.m, test.s);
        tests.push(test);
      }
      return tests;
    }

    let tests = genTests();
    for (let test of tests) {
      const { h, m, s, ans } = test;
      assert.strictEqual(
        past(h, m, s),
        ans,
        `Incorrect answer for h=${h}, m=${m}, s=${s}`
      );
    }
  });
});
