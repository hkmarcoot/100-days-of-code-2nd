// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { areaOrPerimeter } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Tests", () => {
  function doTest(l, w, expected) {
    assert.strictEqual(
      areaOrPerimeter(l, w),
      expected,
      `Incorrect answer for l=${l}, w=${w}`
    );
  }

  it("Example tests", () => {
    doTest(3, 3, 9);
    doTest(6, 10, 32);
  });

  it("Random tests", function () {
    let tests = [];

    for (let i = 1; i < 50; i++) {
      let a = (Math.random() * 1200 + 10) | 0;
      let b = (Math.random() * 1500 + 10) | 0;
      b += a == b;

      tests.push([a, b, 2 * a + 2 * b]);
      tests.push([a, a, a * a]);
    }

    tests = tests
      .map((e) => [e, Math.random()])
      .sort((e1, e2) => e1[1] - e2[1])
      .map((e) => e[0]);

    for (let [l, w, expected] of tests) {
      doTest(l, w, expected);
    }
  });
});
