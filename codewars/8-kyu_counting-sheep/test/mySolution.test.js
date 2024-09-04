// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
import { countSheeps } from "../src/mySolution.js";
// import pkg from "lodash";
// const { _ } = pkg;

describe("Submission Tests", function () {
  function stringify(sheep) {
    return `[${sheep.map(String).join(",")}]`;
  }

  it("Fixed Tests", function () {
    const tests = [
      [[], 0],
      [[undefined], 0],
      [[null], 0],
      [[false], 0],
      [[true], 1],
      [[undefined, null, false, true], 1],
      [[undefined, null, false, true, true, false, null, undefined], 2],
      [
        [
          true,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          false,
          true,
          false,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
        ],
        17,
      ],
    ];

    for (let [sheep, expected] of tests) {
      let message = `Test failed for sheep = ${stringify(sheep)}\nAssertion`;
      let actual = countSheeps(sheep);
      assert.strictEqual(actual, expected, message);
    }
  });

  it("Random Tests", function () {
    for (let _ = 0; _ < 100; ++_) {
      let [sheep, expected] = randomTest();
      let message = `Test failed for sheep = ${stringify(sheep)}\nAssertion`;
      let actual = countSheeps(sheep);
      assert.strictEqual(actual, expected, message);
    }

    function randomTest() {
      let values = [undefined, null, false, true, true, true];
      let sheep = Array(Math.floor(Math.random() * 21));
      let sheepCount = 0;
      for (let i = 0; i < sheep.length; ++i) {
        let valueIndex = Math.floor(Math.random() * values.length);
        sheep[i] = values[valueIndex];
        sheepCount += values[valueIndex] === true;
      }
      return [sheep, sheepCount];
    }
  });
});
