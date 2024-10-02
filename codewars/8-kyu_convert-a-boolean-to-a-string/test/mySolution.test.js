// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { booleanToString } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Solution", function () {
  it("Fixed Tests", function () {
    assert.strictEqual(
      booleanToString(true),
      "true",
      'When we pass in true, we want the string "true" as output'
    );
    assert.strictEqual(
      booleanToString(false),
      "false",
      'When we pass in false, we want the string "false" as output'
    );
    assert.strictEqual(
      booleanToString(false),
      "false",
      'When we pass in false, we want the string "false" as output'
    );
  });
  it("Random Tests", function () {
    Array(40)
      .fill(0)
      .forEach(() => {
        const val = Math.random() < 0.5,
          exp = val ? "true" : "false";
        assert.strictEqual(
          booleanToString(val),
          exp,
          `When we pass in ${exp}, we want the string "${exp}" as output`
        );
      });
  });
});
