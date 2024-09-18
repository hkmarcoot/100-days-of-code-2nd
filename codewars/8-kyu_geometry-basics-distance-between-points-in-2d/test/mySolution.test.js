// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { distanceBetweenPoints } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Solution", function () {
  it("Fixed tests", function () {
    doTest({ x: 3, y: 3 }, { x: 3, y: 3 }, 0);
    doTest({ x: 1, y: 6 }, { x: 4, y: 2 }, 5);
    doTest({ x: -10.2, y: 12.5 }, { x: 0.3, y: 14.7 }, 10.728001);
  });

  it("Random Tests", function () {
    for (let i = 0; i < 100; ++i) {
      const a = { x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 };
      const b = { x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 };
      const expected = Math.sqrt(
        Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)
      );
      doTest(a, b, expected);
    }
  });

  function doTest(a, b, expected) {
    const actual = distanceBetweenPoints(a, b);
    assert.approximately(
      actual,
      expected,
      1e-6,
      `Incorrect answer for:\n  a=new Point(${a.x}, ${a.y})\n  b=new Point(${b.x}, ${b.y})\n`
    );
  }
});

// Reference
// https://stackoverflow.com/questions/64653660/how-to-get-value-from-key-in-map-if-key-is-an-object-js
