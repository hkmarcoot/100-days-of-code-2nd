// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;
import { assert } from "chai";
// const { strictEqual } = assert;
import { greet } from "../src/mySolution.js";

// import pkg from "lodash";
// const { _ } = pkg;

describe("Jenny's greeting function", function () {
  it("should greet some people normally", function () {
    assert.strictEqual(greet("Jim"), "Hello, Jim!");
    assert.strictEqual(greet("Jane"), "Hello, Jane!");
    assert.strictEqual(greet("Simon"), "Hello, Simon!");
  });
  it("should greet Johnny a little bit more special", function () {
    assert.strictEqual(greet("Johnny"), "Hello, my love!");
  });
});
